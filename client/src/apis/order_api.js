import { send_api } from "../utils/fetchAPI_base";
const createOrder = async (body_data) => {
  console.log("create order", body_data);
  return await send_api("/order/createOrder", "POST", body_data);
};
export { createOrder };
