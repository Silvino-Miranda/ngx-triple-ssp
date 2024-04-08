import { Observable } from 'rxjs';

export interface CrudCreate<TCreateReq> {
  create<MyRes>(createReq: TCreateReq): Observable<MyRes>;
}
