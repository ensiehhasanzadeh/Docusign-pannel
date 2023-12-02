import { httpRequest } from "./setup";

export interface API_Contract_List_Output {
  contracts: []
}

export function API_Contract_List() {
  return httpRequest<API_Contract_List_Output>('/contracts/list/')
}