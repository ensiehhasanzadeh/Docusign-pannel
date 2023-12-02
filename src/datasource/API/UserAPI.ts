import { httpPost, httpRequest } from "./setup"

export type Profile = API_Auth_GetToken_Output

export interface API_Auth_GetToken_Input {
  username: string
  password: string
}

export interface API_Auth_GetToken_Output {
  token: string
  user_id: number
  email: string
  username: string,
  first_name: string
  last_name: string
}

export function API_User_Login(body: API_Auth_GetToken_Input) {
  return httpPost<API_Auth_GetToken_Output>('/auth/api-token-auth/', body)
}

export interface API_Auth_Register_Input {
  password: string
  username: string
  phone_number: string
  first_name: string
  last_name: string
  email: string
  ver_id: number
  ver_code: number
}

export interface API_Auth_Register_Output {
  id: number
  username: string
  phone_number: string
  email: string
  first_name: string
  last_name: string
  created_date: string
  verifications: []
}

export function API_User_Register(body: API_Auth_Register_Input) {
  return httpPost<API_Auth_Register_Output>('/auth/register/', body)
}

export interface API_Auth_ResetPassword_Input {
  username: string
  phone_number: string
}

export function API_User_ResetPassword(body: API_Auth_ResetPassword_Input) {
  return httpPost('/auth/reset-password/', body)
}

export interface API_Auth_ChangePassword_Input {
  old_password: string
  new_password: string
}

export function API_User_ChangePassword(body: API_Auth_ChangePassword_Input) {
  return httpRequest('/auth/change-password/', { body, encryption: false, method: 'POST' })
}