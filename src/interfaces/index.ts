declare type APITypes<T = Allow, E = Allow> = {
    data: T
    error: E
    message: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Allow<T = any> = T | null