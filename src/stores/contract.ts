import {
  API_Contract_Create,
  API_Contract_Create_Input,
  API_Contract_List,
  API_Contract_Delete_Input,
  API_Contract_Delete,
  API_Contract_Edit_Input,
  API_Contract_Edit,
  API_Contract_Sign_Input,
  API_Contract_Sign,
  API_Contract_Details,
  API_Contract_Leave,
  API_Contract_AddMembers_Input,
  API_Contract_AddMembers
} from "@/datasource/API/ContractAPI"
import { defineStore } from "pinia"

export const useContractStore = defineStore('contract', () => {

  function list() {
    return API_Contract_List()
  }

  function create(body: API_Contract_Create_Input) {
    return API_Contract_Create(body)
  }

  function deleteContract(body: API_Contract_Delete_Input) {
    return API_Contract_Delete(body)
  }

  function edit(body: API_Contract_Edit_Input) {
    return API_Contract_Edit(body)
  }

  function sign(body: API_Contract_Sign_Input) {
    return API_Contract_Sign(body)
  }

  function getDetails(id: number) {
    return API_Contract_Details(id)
  }

  function leave(id: number) {
    return API_Contract_Leave(id)
  }

  function addMembers(body: API_Contract_AddMembers_Input) {
    return API_Contract_AddMembers(body)
  }

  function confirm(id: number) {
    return API_Contract_Leave(id)
  }

  return {
    list,
    create,
    deleteContract,
    edit,
    sign,
    getDetails,
    leave,
    addMembers,
    confirm
  }
})