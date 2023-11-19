import { getDeferedPromise } from '@/utils'

interface HttpMeta {
  body?: any
  method?: 'GET' | 'POST'
  encryption?: boolean
  headers?: Record<string, string>
  formData?: boolean
}

export async function httpRequest<T>(path: string, meta: HttpMeta = {}): Promise<T> {
  const deferred = getDeferedPromise()
  const formData = meta.formData || false
  const method = meta.method || 'GET'
  const token = await Profile.getToken()
  const request = new XMLHttpRequest()

  request.open(method, `${AppConfig.BaseAPI}${path}`, true)

  if (!formData) {
    request.setRequestHeader('Content-Type', 'application/octet-stream')
  }
  if (token) {
    request.setRequestHeader('Authorization', `Bearer ${token}`)
  }

  if (meta.headers) {
    for (const header in meta.headers) {
      request.setRequestHeader(header, meta.headers[header])
    }
  }
  request.responseType = 'json'

  request.onload = async function () {
    if (this.status === 401) {
      Profile.logout()
      return
    }

    let response: any
    try {
      response = this.response
      if (this.status < 200 || this.status >= 400 || response?.status === 'error') {
        deferred.reject(response.error || response)
      } else {
        deferred.resolve(response)
      }
    } catch (err) {
      console.log(err)
      deferred.reject(new Error('Error in Decryption'))
    }
  }

  request.onerror = () => {
    // There was a connection error of some sort
    deferred.reject(new Error('Network Error'))
  }

  request.send(meta.body)

  return deferred.promise
}
export function httpPost<T>(api: string, body?: object): Promise<T> {
  return httpRequest<T>(api, {
    method: 'POST',
    body,
  })
}

export function httpGet<T>(api: string): Promise<T> {
  return httpRequest<T>(api)
}
