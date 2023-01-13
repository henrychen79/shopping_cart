import { send_api } from "../utils/fetchAPI_base";
const createOrder = async (body_data) => {
  console.log("create order", body_data);
  return await send_api("/order/createOrder", "POST", body_data);
};
const orderList = async (user_id) => {
  return await send_api(`/order/list/${user_id}`, "GET");
};
export { createOrder, orderList };
