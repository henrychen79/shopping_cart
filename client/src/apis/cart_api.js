import { send_api } from "../utils/fetchAPI_base";
const cartList = async (user_id) => {
  return await send_api(`/cart/${user_id}`, "GET");
};
const addToCart = async (body_data) => {
  return await send_api("/cart/addToCart", "POST", body_data);
};
export { cartList, addToCart };
