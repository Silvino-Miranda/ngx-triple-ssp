import { Observable } from 'rxjs';

export interface CrudUpdate<TUpdateReq> {
  update<MyRes>(id: string, data: TUpdateReq): Observable<MyRes>;
}
