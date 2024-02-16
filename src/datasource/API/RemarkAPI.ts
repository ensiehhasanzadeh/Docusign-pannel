import { httpRequest } from "./setup"

export interface API_Remark_Delete_Input {
  contract_id: number
  clause_id: number
  remark_id: number
}

export interface API_Remark_Delete_Output {
  /** پیام */
  message: string
}

export function API_Remark_Delete(body: API_Remark_Delete_Input) {
  return httpRequest<API_Remark_Delete_Output>('/contracts/remark/delete/', { body, method: 'POST' })
}

export interface API_Remark_Create_Input {
  contract_id: number
  clause_id: string
  remark_title: string
  remark_content: string
}

export interface API_Remark_Create_Output {
  /** پیام */
  message: string
  remark_id: number
}

export function API_Remark_Create(body: API_Remark_Create_Input) {
  return httpRequest<API_Remark_Create_Output>('/contracts/remark/create/', { body, method: 'POST' })
}

export interface API_Remark_Edit_Input {
  contract_id: number
  clause_id: number
  remark_id: number
  remark_title: string
  remark_content: string
}

export interface API_Remark_Edit_Output {
  /** پیام */
  message: string
}

export function API_Remark_Edit(body: API_Remark_Edit_Input) {
  return httpRequest<API_Remark_Edit_Output>('/contracts/remark/edit/', { body, method: 'POST' })
}