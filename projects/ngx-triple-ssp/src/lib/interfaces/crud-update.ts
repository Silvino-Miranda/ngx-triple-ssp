import { Observable } from 'rxjs';

export interface CrudUpdate<TUpdateReq> {
  update(id: string, data: TUpdateReq): Observable<unknown>;
}
