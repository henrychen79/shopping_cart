import { send_api } from "../utils/fetchAPI_base";
const registerAccount = async (body_data) => {
  console.log("register account", body_data);
  return await send_api("/user/registerAccount", "POST", body_data);
};
const checkAccountExist = async (account) => {
  return await send_api(`/user/checkAccountExist?account=${account}`, "GET");
};
export { registerAccount, checkAccountExist };
