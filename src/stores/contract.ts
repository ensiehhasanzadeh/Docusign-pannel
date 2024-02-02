import { API_Contract_Create, API_Contract_Create_Input, API_Contract_List } from "@/datasource/API/ContractAPI"
import { defineStore } from "pinia"

export const useContractStore = defineStore('contract', () => {

  function list() {
    return API_Contract_List()
  }

  function create(body: API_Contract_Create_Input) {
    return API_Contract_Create(body)
  }
  
  return{ list, create }
})