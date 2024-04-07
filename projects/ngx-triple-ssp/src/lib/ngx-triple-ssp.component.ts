export abstract class NgxTripleSspComponent<T> {
  private _loading: boolean = false;
  private _error: any = null;
  private _data: T | null = null;

  constructor(data: T) {
    this.setData(data);
  }

  get loading(): boolean {
    return this._loading;
  }

  get error(): any {
    return this._error;
  }

  get data(): T | null {
    return this._data;
  }

  protected setLoading(loading: boolean): void {
    this._loading = loading;
    this.updateUI();
  }

  protected setError(error: any): void {
    this._error = error;
    this.updateUI();
  }

  protected setData(data: T | null): void {
    this._data = data;
    this.updateUI();
  }

  // Método para atualizar a UI quando o estado muda
  // Deve ser implementado pelo componente que estende esta classe
  protected abstract updateUI(): void;
}
