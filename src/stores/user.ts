
import { API_Auth_GetToken_input, API_User_Login, Profile } from '@/datasource/API/UserAPI'
import { KV_User_GetToken } from '@/datasource/KV/UserKV'
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

  async function login(body: API_Auth_GetToken_input) {
    await API_User_Login(body)
  }
  
  return{getToken, login}
})