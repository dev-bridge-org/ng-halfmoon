import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  InjectionToken,
  Injector,
  Type
} from '@angular/core';
import {ModalContainerComponent} from './modal-container/modal-container.component';
import {ModalConfig} from './modal-config';
import {ModalRef} from './modal-ref';

export const MODAL_DATA = new InjectionToken('modalData');

@Injectable()
export class ModalService {
  private counter: number = 0;
  private modalRef: ModalRef;
  private containerRef: ComponentRef<ModalContainerComponent>;
  private contentRef: ComponentRef<any>;
  private body: string = 'body';

  constructor(
    private _applicationRef: ApplicationRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _injector: Injector
  ) {}

  createModal<T, D>(component: Type<T>, config?: ModalConfig<D>): ModalRef<T> {
    this.modalRef = new ModalRef<T>();

    this.contentRef = this.createContent(component, config);
    this._applicationRef.attachView(this.contentRef.hostView);

    this.containerRef = this.createContainer();
    this.containerRef.instance.id = config?.id ?? `modal-${this.counter}`;
    this.containerRef.instance.defaultDismiss = config?.defaultDismiss ?? false;
    this.modalRef.modalId = config?.id ?? `modal-${this.counter}`;

    this.modalRef.close = (data) => {
      this.containerRef.instance.isShown = false;
      // timeout to not interrupt the closing animation
      setTimeout(() => {
        this.removeModal();
        this.modalRef.afterClosed.emit(data);
      }, 100);
    };

    this._applicationRef.attachView(this.containerRef.hostView);

    const selectedElement = document.querySelector(this.body);

    selectedElement?.appendChild(this.containerRef.location.nativeElement);

    // Trigger toggle a 1ms later to achieve the correct animation
    setTimeout(() => {
      this.containerRef.instance.isShown = true;
    }, 1);
    this.counter++;
    return this.modalRef;
  }

  private createContainer(): ComponentRef<ModalContainerComponent> {
    const factory = this._componentFactoryResolver.resolveComponentFactory(
      ModalContainerComponent
    );

    const injector = Injector.create({
      parent: this._injector,
      providers: [{provide: ModalRef, useValue: this.modalRef}]
    });

    return factory.create(injector, [[this.contentRef.location.nativeElement]]);
  }

  private createContent<T, D>(
    component: Type<T>,
    config?: ModalConfig<D>
  ): ComponentRef<T> {
    const contentCmptFactory =
      this._componentFactoryResolver.resolveComponentFactory(component);

    const modalContentInjector = Injector.create({
      providers: [
        {provide: ModalRef, useValue: this.modalRef},
        {provide: MODAL_DATA, useValue: config?.data}
      ],
      parent: this._injector
    });

    return contentCmptFactory.create(modalContentInjector);
  }

  private removeModal(): void {
    this.contentRef.destroy();
    this.containerRef.destroy();
  }
}
