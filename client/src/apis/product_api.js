import { send_api, get_image_api } from "../utils/fetchAPI_base";
const allCategory = async () => {
  return await send_api("/product/allCategory", "GET");
};
const productBrief = async (category, page, sort) => {
  const api_name = `/product/category/${category}?page=${page}&order=${sort}`;
  return await send_api(api_name, "GET");
};

const productDetail = async (product_id) => {
  const api_name = `/product/detail?product_id=${product_id}`;
  return await send_api(api_name, "GET");
};

const productImage = async (category_id, product_id, type) => {
  const api_name = `/product/image?category_id=${category_id}&product_id=${product_id}&type=${type}`;
  return await get_image_api(api_name, "GET");
};
export { allCategory, productBrief, productImage, productDetail };
