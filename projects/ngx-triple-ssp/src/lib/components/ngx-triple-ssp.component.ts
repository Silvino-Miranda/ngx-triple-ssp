export abstract class NgxTripleSspComponent<T> {
  private _loading: boolean = false;
  private _error: any = null;
  private _dataSource: T | null = null;

  constructor(dataSource: T) {
    this.setDataSource(dataSource);
  }

  get loading(): boolean {
    return this._loading;
  }

  get error(): any {
    return this._error;
  }

  get dataSource(): T | null {
    return this._dataSource;
  }

  protected setLoading(loading: boolean): void {
    this._loading = loading;
  }

  protected setError(error: any): void {
    this._error = error;
  }

  protected setDataSource(dataSource: T | null): void {
    this._dataSource = dataSource;
  }

  protected abstract loadData(): void;
  protected abstract goBack(): Promise<void>;
}
