import { send_api, get_image_api } from "../utils/fetchAPI_base";
const allCategoryAPI = async () => {
  return await send_api("/product/allCategory", "GET");
};
const productAPI = async (category, page, sort) => {
  const api_name = `/product/category/${category}?page=${page}&order=${sort}`;
  return await send_api(api_name, "GET");
};

const productImageAPI = async (category_id, product_id, type) => {
  const api_name = `/product/image?category_id=${category_id}&product_id=${product_id}&type=${type}`;
  return await get_image_api(api_name, "GET");
};
export { allCategoryAPI, productAPI, productImageAPI };
