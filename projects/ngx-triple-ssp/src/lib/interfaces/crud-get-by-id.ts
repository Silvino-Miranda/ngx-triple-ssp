import { Observable } from 'rxjs';

export interface CrudGetById<T> {
  getById(id: string): Observable<T>;
}
