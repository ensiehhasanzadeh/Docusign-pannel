import {
  API_Cluase_Create,
  API_Cluase_Create_Input,
  API_Cluase_Delete,
  API_Cluase_Delete_Input,
  API_Cluase_Edit,
  API_Cluase_Edit_Input
} from "@/datasource/API/CloaseAPI"
import { defineStore } from "pinia"

export const useCluaseStore = defineStore('cluase', () => {

  function deleteCluase(body: API_Cluase_Delete_Input) {
    return API_Cluase_Delete(body)
  }

  function create(body: API_Cluase_Create_Input) {
    return API_Cluase_Create(body)
  }

  function edit(body: API_Cluase_Edit_Input) {
    return API_Cluase_Edit(body)
  }

  return {
    deleteCluase,
    create,
    edit
  }
})