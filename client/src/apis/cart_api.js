import { send_api, get_image_api } from "../utils/fetchAPI_base";
const cartList = async (user_id) => {
  return await send_api(`/cart/${user_id}`, "GET");
};
const addToCart = async (body_data) => {
  return await send_api("/cart/addToCart", "POST", body_data);
};
const setCartImg = async (product_category, product_id, type) => {
  return await get_image_api(`/product/image?category_id=${product_category}&product_id=${product_id}&type=${type}`, "GET");
};
const delFromCart = async (body_data) => {
  return await send_api("/cart/delCartItem", "POST", body_data);
};


export { cartList, addToCart, setCartImg, delFromCart };
