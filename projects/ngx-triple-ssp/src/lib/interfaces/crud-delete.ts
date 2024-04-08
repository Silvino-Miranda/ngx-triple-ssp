import { Observable } from 'rxjs';

export interface CrudDelete {
  delete<MyRes>(id: string): Observable<MyRes>;
}
