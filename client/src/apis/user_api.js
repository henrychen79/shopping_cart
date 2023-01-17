import { send_api } from "../utils/fetchAPI_base";
const registerAccount = async (body_data) => {
  console.log("register account", body_data);
  return await send_api("/user/registerAccount", "POST", body_data);
};
const checkAccountExist = async (account) => {
  return await send_api(`/user/checkAccountExist?account=${account}`, "GET");
};

const loginAccount = async (body_data) => {
  return await send_api("/user/login", "POST", body_data);
};

const forgetPassword = async (body_data) => {
  return await send_api("/user/forgetPassword", "POST", body_data);
};

const updatePassword = async (body_data) => {
  return await send_api("/user/updatePassword", "POST", body_data);
};
export {
  registerAccount,
  checkAccountExist,
  loginAccount,
  forgetPassword,
  updatePassword,
};
