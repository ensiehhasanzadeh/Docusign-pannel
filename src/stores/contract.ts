import { API_Contract_List } from "@/datasource/API/ContractAPI"
import { defineStore } from "pinia"

export const useContractStore = defineStore('contract', () => {

  function list() {
    return API_Contract_List()
  }
  
  return{ list }
})