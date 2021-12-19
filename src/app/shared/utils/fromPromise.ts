import { defer, from, Observable } from 'rxjs';

export function fromPromise<T>(p: Promise<T>): Observable<T> {
  return defer(() => from(p));
}
