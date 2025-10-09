import { Observable } from 'rxjs';

export interface CrudDelete {
  delete(id: string): Observable<unknown>;
}
