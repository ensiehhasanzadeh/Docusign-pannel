import { useUserStore } from '@/stores/user'
import { getDeferedPromise } from '@/utils'
import Toast from 'primevue/toast';
import { ToastServiceMethods } from 'primevue/toastservice';
import { useToast } from 'primevue/usetoast';

interface HttpMeta {
  body?: any
  method?: 'GET' | 'POST'
  headers?: Record<string, string>
  formData?: boolean
}

function encodeFormData(body: any) {
  const data = new FormData()

  for (const key in body) {
    data.append(key, body[key])
  }

  return data
}

export async function httpRequest<T>(path: string, meta: HttpMeta = {}): Promise<T> {
  const deferred = getDeferedPromise()
  const formData = meta.formData || false
  const method = meta.method || 'GET'
  const { getToken } = useUserStore()
  const token = await getToken()

  const request = new XMLHttpRequest()

  request.open(method, `${AppConfig.BaseAPI}/v1${path}`, true)

  if (!formData) {
    request.setRequestHeader('Content-Type', 'application/octet-stream')
  }
  if (token) {
    request.setRequestHeader('Authorization', `Token ${token}`)
  }

  if (meta.headers) {
    for (const header in meta.headers) {
      request.setRequestHeader(header, meta.headers[header])
    }
  }
  request.responseType = 'json'

  request.onload = async function () {
    if (this.status === 401) {
      // Profile.logout()
      return
    }

    let response: any
    try {
      response = this.response
      if (this.status < 200 || this.status >= 400 || response?.status === 'error') {
        deferred.reject(response)
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

  let packedBody
  if (meta.formData) {
    packedBody = encodeFormData(meta.body)
  } else {
    packedBody = JSON.stringify(meta.body)
  }

  request.send(packedBody)

  return deferred.promise
}
export function httpPost<T>(api: string, body?: object): Promise<T> {
  return httpRequest<T>(api, {
    method: 'POST',
    formData: true,
    body,
  })
}

export function httpGet<T>(api: string): Promise<T> {
  return httpRequest<T>(api)
}

export function handleCommonError(error: any, toast: ToastServiceMethods) {
  const message = error.error || error.detail || error.message || 'خطایی رخ داده است'
  toast.add({ severity: 'error', summary: message, life: 3000 });
}