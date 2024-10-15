
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_ADMIN
const baseUrl: string = 'http://10.236.216.14:5000/UPS/api/v2'


console.log(baseUrl)

export const appApiUrlsService = {
  LOGIN: `${baseUrl}/login`,
  LOGOUT: `${baseUrl}/logout`,
  ADD_USER: `${baseUrl}/User/addNewCTSUser`,
  AUTH_USER_BY_CCY: `${baseUrl}/User/authoriseCcy/{ccy_code}`,
  USER_ROLE: `${baseUrl}/User/getUserGroups`,
  GET_CCY: `${baseUrl}/User/getAllCCY`,
  PUT_CCY: `${baseUrl}/User/getAllCCY`,
  POST_CCY: `${baseUrl}/User/getAllCCY`,
  GET_CCY_SAVE: `${baseUrl}/User/getAllCCYSave`,
  GET_CCY_UPDATE: `${baseUrl}/User/getAllCCYUpadate`,
  GET_BANKS: `${baseUrl}/User/getAllBanks`,
  GET_MAIL: `${baseUrl}/User/getAllMail`,
  GET_MAIL_AUTH: `${baseUrl}/User/getAllEmailauth`,
  MAIL_GROUP: `${baseUrl}/Data/getMailGroup`,
  GET_USERSAUTH: `${baseUrl}/User/getAllUsersAUTH`,
  GET_CCYUNAUTH: `${baseUrl}/User/getAllCcysauth`,
  AUTHORIZE_CCY: `${baseUrl}/User/authoriseCcy/`,
  AUTHORIZE_EMAIL: `${baseUrl}/User/authoriseEmail/`,
  UPDATE_USER: `${baseUrl}/User/updateUser/`,
  VALIDATE_TOKEN: `${baseUrl}/validateToken`,
  USER_DETAILS: `${baseUrl}/User/getUserDetails`,
  AUTHORIZE_USER: `${baseUrl}/User/authoriseUser/`,
  REJECT_USER: `${baseUrl}/User/rejectUser/`,
  DISABLE_USER: `${baseUrl}/User/deactivateAccount/`,
  VALIDATE_USER: `${baseUrl}/User/validateAccount`,
  BRANCH_LISTACH: `${baseUrl}/User/getBranchListACH`
}


import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Set your API URL in .env.local
});

export default api;


