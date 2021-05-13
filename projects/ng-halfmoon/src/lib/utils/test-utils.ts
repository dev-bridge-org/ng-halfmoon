import {ComponentFixture} from "@angular/core/testing";
import {DebugElement, DebugNode, Predicate} from "@angular/core";

export class TestUtils {
  static getElementByDirective<C>(fixture: ComponentFixture<C>, predicate: Predicate<DebugNode>): DebugElement {
    return fixture.debugElement.query(predicate);
  }
}
