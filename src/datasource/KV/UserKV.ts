import { Profile } from '../API/UserAPI'
import { getKeyValue, setKeyValue, clearAllKeys } from './setup'

/**
 * ذخیره توکن در IndexedDB
 * @param token - توکن
 */
export function KV_User_SetToken(token: string | null) {
  return setKeyValue('token', token)
}

/**
 *  دریافت توکن از IndexedDB
 * @returns توکن ذخیره شده در صورت وجود
 */
export function KV_User_GetToken(): Promise<string> {
  return getKeyValue('token')
}

/**
 *  ذخیره پروفایل در IndexedDB
 */
export function KV_User_SetProfile(profile: Profile) {
  return setKeyValue('profile', profile)
}

/**
 * @returns پروفایل ذخیره شده در صورت وجود
 */
export function KV_User_GetProfile(): Promise<Profile> {
  return getKeyValue('profile')
}

/**
 *  ذخیره پروفایل در IndexedDB
 */
export function KV_User_Clear() {
  return clearAllKeys()
}
