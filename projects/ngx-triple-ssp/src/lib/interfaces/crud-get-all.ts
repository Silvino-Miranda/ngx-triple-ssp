import { Observable } from 'rxjs';

export interface CrudGetAll<TPageable> {
  getAll(): Observable<TPageable>;
}
