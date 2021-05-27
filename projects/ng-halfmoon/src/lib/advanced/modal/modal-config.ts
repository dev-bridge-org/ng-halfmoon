export class ModalConfig<T = Record<string, unknown>> {
  id?: string;
  defaultDismiss?: boolean;
  data?: T;
}
