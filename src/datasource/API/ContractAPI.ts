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