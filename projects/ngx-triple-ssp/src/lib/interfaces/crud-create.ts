import { Observable } from 'rxjs';

export interface CrudCreate<TCreateReq> {
  create(createReq: TCreateReq): Observable<unknown>;
}
