import { httpRequest } from "./setup"

export interface API_Cluase_Delete_Input {
  contract_id: number
  clause_id: number
}

export interface API_Cluase_Delete_Output {
  /** پیام */
  message: string
}

export function API_Cluase_Delete(body: API_Cluase_Delete_Input) {
  return httpRequest<API_Cluase_Delete_Output>('/contracts/clause/delete/', { body, method: 'POST' })
}

export interface API_Cluase_Create_Input {
  contract_id: number
  clause_title: string
  clause_content: string
}

export interface API_Cluase_Create_Output {
  /** پیام */
  message: string
  clause_id: number
}

export function API_Cluase_Create(body: API_Cluase_Create_Input) {
  return httpRequest<API_Cluase_Create_Output>('/contracts/clause/create/', { body, method: 'POST' })
}

export interface API_Cluase_Edit_Input {
  contract_id: number
  clause_id: number
  clause_title: string
  clause_content: string
}

export interface API_Cluase_Edit_Output {
  /** پیام */
  message: string
  clause_title: string
}

export function API_Cluase_Edit(body: API_Cluase_Edit_Input) {
  return httpRequest<API_Cluase_Edit_Output>('/contracts/clause/edit/', { body, method: 'POST' })
}