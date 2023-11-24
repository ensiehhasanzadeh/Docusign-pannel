import { httpPost, httpRequest } from "./setup"

/** پروفایل کاربر */
export type Profile = API_Auth_GetToken_Output

export interface API_Auth_GetToken_input {
  /** نام کاربری */
  username: string
  /** رمز عبور */
  password: string
}

export interface API_Auth_GetToken_Output {
  token: string
  user_id: number
  email: string
  username: "ensieh",
  first_name: string
  last_name: string
}

export function API_User_Login(body: API_Auth_GetToken_input) {
  return httpPost<API_Auth_GetToken_Output>('/auth/api-token-auth/', body)
}