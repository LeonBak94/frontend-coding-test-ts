export type GraphqlRequestResult<T> =
  | { data: T; errors: string[] }
  | { data: null; errors: string[] }
