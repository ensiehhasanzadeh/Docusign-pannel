import {
  API_Remark_Create,
  API_Remark_Create_Input,
  API_Remark_Delete,
  API_Remark_Delete_Input,
  API_Remark_Edit,
  API_Remark_Edit_Input
} from "@/datasource/API/RemarkAPI"
import { defineStore } from "pinia"

export const useRemarkStore = defineStore('remark', () => {

  function deleteRemark(body: API_Remark_Delete_Input) {
    return API_Remark_Delete(body)
  }

  function create(body: API_Remark_Create_Input) {
    return API_Remark_Create(body)
  }

  function edit(body: API_Remark_Edit_Input) {
    return API_Remark_Edit(body)
  }

  return {
    deleteRemark,
    create,
    edit
  }
})