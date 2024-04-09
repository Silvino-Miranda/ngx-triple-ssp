export abstract class NgxTripleSspComponent<T> {
  private _isLoading: boolean = false;
  private _error: any = null;
  private _dataSource: T | null = null;

  constructor(dataSource: T) {
    this.setDataSource(dataSource);
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get error(): any {
    return this._error;
  }

  get dataSource(): T | null {
    return this._dataSource;
  }

  protected setLoading(loading: boolean): void {
    this._isLoading = loading;
  }

  protected setError(error: any): void {
    this._error = error;
  }

  protected setDataSource(dataSource: T | null): void {
    this._dataSource = dataSource;
  }

  protected abstract loadData(): Promise<void> | void;
  protected abstract goBack(): Promise<void> | void;
}
