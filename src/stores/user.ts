
import {
  API_Auth_ChangePassword_Input,
  API_Auth_GetToken_Input,
  API_Auth_PhoneVerification_Input,
  API_Auth_Register_Input,
  API_Auth_ResetPassword_Input,
  API_Auth_SendOTP_Input,
  API_User_ChangePassword,
  API_User_Login,
  API_User_PhoneVerification,
  API_User_Register,
  API_User_ResetPassword,
  API_User_SendOTP,
  Profile
} from '@/datasource/API/UserAPI'
import { KV_User_GetToken, KV_User_SetToken } from '@/datasource/KV/UserKV'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from "vue-i18n";

export const useUserStore = defineStore('user', () => {

  const { t } = useI18n();

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
    if (!body.username) {
      throw new Error(t('enterUsername'))
    }
    if (!body.password) {
      throw new Error(t('enterPassword'))
    }
    const result = await API_User_Login(body)
    setToken(result.token)
    return result
  }

  function register(body: API_Auth_Register_Input) {
    return API_User_Register(body)
  }

  function resetPassword(body: API_Auth_ResetPassword_Input) {
    if (!body.username) {
      throw new Error(t('enterUsername'))
    }
    if (!body.phone_number) {
      throw new Error(t('enterMobile'))
    }
    return API_User_ResetPassword({
      username: body.username,
      phone_number: '+98' + body.phone_number
    })
  }

  function changePassword(body: API_Auth_ChangePassword_Input) {
    return API_User_ChangePassword(body)
  }

  function sendOtp(body: API_Auth_SendOTP_Input) {
    return API_User_SendOTP(body)
  }

  function phoneVerification(body: API_Auth_PhoneVerification_Input) {
    return API_User_PhoneVerification(body)
  }

  return {
    getToken,
    login,
    register,
    resetPassword,
    profile,
    init,
    changePassword,
    sendOtp,
    phoneVerification
  }
})