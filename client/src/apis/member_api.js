import { send_api } from "../utils/fetchAPI_base";

const update_nickname = async (body_data) => {
  return await send_api("/member/update_nickname", "POST", body_data);
};
const modify_password = async (body_data) => {
  return await send_api("/member/modify_password", "POST", body_data);
};
export { update_nickname, modify_password };
