import { API_Contract_Create, API_Contract_Create_Input, API_Contract_List, API_Contract_Delete_Input, API_Contract_Delete } from "@/datasource/API/ContractAPI"
import { defineStore } from "pinia"

export const useContractStore = defineStore('contract', () => {

  function list() {
    return API_Contract_List()
  }

  function create(body: API_Contract_Create_Input) {
    return API_Contract_Create(body)
  }

  function deleteCntract (body: API_Contract_Delete_Input) {
    return API_Contract_Delete(body)
  }

return { list, create, deleteCntract }
})