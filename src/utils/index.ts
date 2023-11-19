export interface DeferedPromise<T> {
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (reason: any) => void
}
export function getDeferedPromise<T = any>(): DeferedPromise<T> {
  const result: DeferedPromise<T> = {} as any
  result.promise = new Promise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}