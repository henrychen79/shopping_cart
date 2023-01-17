import { send_api, upload_image_api } from "../utils/fetchAPI_base";
const getProducts = async (fetchCategory1) => {
  return await send_api(`/admin/getProducts?category=${fetchCategory1}`, "GET");
};
const getProduct = async (fetchCategory2, fetchProductNum) => {
  return await send_api(
    `/admin/getProduct?category=${fetchCategory2}&productNum=${fetchProductNum}`,
    "GET"
  );
};
const uploadImage = async (file, category, productNum) => {
  return await upload_image_api(
    `/admin/uploadImage?category_id=${category}&product_id=${productNum}`,
    file
  );
};
const edit_product = async (product_id) => {
  return await send_api(`/admin/edit_product?product_id=${product_id}`, "GET");
};
const update_product = async (body_data) => {
  return await send_api("/admin/update_product", "POST", body_data);
};
const update_price = async (product_id, body_data) => {
  return await send_api(
    `/admin/update_price?product_id=${product_id}`,
    "POST",
    body_data
  );
};
const update_inventory = async (product_id, body_data) => {
  return await send_api(
    `/admin/update_inventory?product_id=${product_id}`,
    "POST",
    body_data
  );
};
const getAllUsers = async () => {
  return await send_api("/admin/getAllUsers", "GET");
};
const add_product = async (body_data) => {
  return await send_api("/admin/addProduct", "POST", body_data);
};
const getAllOrders = async () => {
  return await send_api("/admin/getAllOrders", "GET");
};
const update_pay = async (body_data) => {
  return await send_api("/admin/update_pay", "POST", body_data);
};
const update_deliver = async (body_data) => {
  return await send_api("/admin/update_deliver", "POST", body_data);
};

export {
  getProducts,
  getProduct,
  uploadImage,
  edit_product,
  update_product,
  update_price,
  update_inventory,
  getAllUsers,
  add_product,
  getAllOrders,
  update_pay,
  update_deliver,
};
