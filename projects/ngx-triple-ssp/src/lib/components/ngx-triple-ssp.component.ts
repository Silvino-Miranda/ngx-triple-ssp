import { signal, computed, Signal } from '@angular/core';

export abstract class NgxTripleSspComponent<T, E = any> {
  protected _isLoading = signal<boolean>(false);
  protected _error = signal<E | null>(null);
  protected _dataSource = signal<T | null>(null);

  readonly isLoading: Signal<boolean> = computed(() => this._isLoading());
  readonly error: Signal<E | null> = computed(() => this._error());
  readonly dataSource: Signal<T | null> = computed(() => this._dataSource());

  constructor(dataSource: T | null = null) {
    this.setDataSource(dataSource);
  }

  protected setLoading(loading: boolean): void {
    this._isLoading.set(loading);
  }

  protected setError(error: E | null): void {
    this._error.set(error);
  }

  protected setDataSource(dataSource: T | null): void {
    this._dataSource.set(dataSource);
  }

  protected abstract loadData(): Promise<void> | void;
  
  protected goBack(): Promise<void> | void {
    // Optional implementation
  }
}
