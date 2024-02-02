import { httpRequest } from "./setup";

export interface API_Contract_List_Output {
  contracts: {
    id: number
    title: string
    content: string
    deleted: boolean
    role: number
  }[]
}

export function API_Contract_List() {
  return httpRequest<API_Contract_List_Output>('/contracts/list/')
}

export interface API_Contract_Create_Input {
  title?: string
  clauses: {
    title?: string
    content: string
    remarks: {
      title?: string
      content: string
    }[]
  }[]
}

export interface API_Contract_Create_Output {
  id: number
  title: string
  clauses: {
    id: number
    title: string
    content: string
    remarks: {
      id: number
      title: string
      content: string
    }[]
  }[]
}

export function API_Contract_Create(body: API_Contract_Create_Input) {
  return httpRequest<API_Contract_Create_Output>('/contracts/contract/create/', { body, method: 'POST' })
}

export interface API_Contract_Delete_Input {
  /** کد احراز هویت */
  ver_id: number
  /** کد تاییدیه */
  ver_code: string
  /** شناسه قرارداد */
  contract_id: number
}

export interface API_Contract_Delete_Output {
  /** پیام */
  message: string
}

export function API_Contract_Delete(body: API_Contract_Delete_Input) {
  return httpRequest<API_Contract_Delete_Output>('/contracts/contract/delete/', { body, method: 'POST' })
}

export interface API_Contract_Edit_Input {
  /** شناسه قرارداد */
  contract_id: number
  /** عنوان جدید قرارداد */
  contract_title: string
  /** محتوای جدید قرارداد */
  contract_content: string
}

export interface API_Contract_Edit_Output {
  /** پیام */
  message: string
}

export function API_Contract_Edit(body: API_Contract_Edit_Input) {
  return httpRequest<API_Contract_Edit_Output>('/contracts/contract/edit/', { body, method: 'POST' })
}

export interface API_Contract_Sign_Input {
  /** آیدی احراز هویت */
  ver_id: number
  /** کد تاییدیه */
  ver_code: string
  /** شناسه قرارداد */
  contract_id: number
}

export interface API_Contract_Sign_Output {
  /** پیام */
  message: string
}

export function API_Contract_Sign(body: API_Contract_Sign_Input) {
  return httpRequest<API_Contract_Sign_Output>('/contracts/sign/', { body, method: 'POST' })
}

export interface API_Contract_Details_Output {
  title: string
  content: string
  is_deleted: boolean
  clauses: {
    id: number
    position: number
    title: string
    content: string
    deleted: boolean
    remarks: {
      id: number
      position: number
      title: string
      content: string
      deleted: boolean
    }[]
  }[]
  members: {
    id: number
    first_name: string
    last_name: string
    username: string
    role: number
  }[]
}

export function API_Contract_Details(id: number) {
  return httpRequest<API_Contract_Details_Output>(`/contracts/detail/${id}`, { method: 'GET' })
}