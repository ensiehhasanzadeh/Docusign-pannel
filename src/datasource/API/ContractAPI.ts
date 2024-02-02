import { httpRequest } from "./setup";

export interface API_Contract_List_Output {
  contracts: {
    id: number,
    title: string,
    content: string,
    deleted: boolean,
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