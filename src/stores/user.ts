
import { API_Auth_ChangePassword_Input, API_Auth_GetToken_Input, API_Auth_Register_Input, API_Auth_ResetPassword_Input, API_User_ChangePassword, API_User_Login, API_User_Register, API_User_ResetPassword, Profile } from '@/datasource/API/UserAPI'
import { KV_User_GetToken, KV_User_SetToken } from '@/datasource/KV/UserKV'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {

  /** توکن */
  const token = ref('')

  /** پروفایل کاربر */
  const profile = ref<Profile | null>(null)

  async function getToken() {
    if (!token.value) token.value = await KV_User_GetToken()
    return token.value
  }

  async function init() {
    const token = await getToken()
    await setToken(token)
  }

  function setToken(newToken: string) {
    token.value = newToken
    return KV_User_SetToken(newToken)
  }

  async function login(body: API_Auth_GetToken_Input) {
    const result = await API_User_Login(body)
    setToken(result.token)
    return result
  }

  function register(body: API_Auth_Register_Input) {
    return API_User_Register(body)
  }

  function resetPassword(body: API_Auth_ResetPassword_Input) {
    return API_User_ResetPassword(body)
  }

  function changePassword(body: API_Auth_ChangePassword_Input) {
    return API_User_ChangePassword(body)
  }
  
  return{ getToken, login, register, resetPassword, profile, init, changePassword }
})