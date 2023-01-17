import route from "../router";
import axios from "axios";
const protocol = "http://";
const port = "8080";
//const base_url = `192.168.85.160:${port}/api`;
const base_url = `127.0.0.1:${port}/api`;
//const base_url = `${window.location.host}/api`;
const send_api = async (api_name, api_method, post_body) => {
  const url = protocol + base_url + api_name;
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)_token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  let init = {};
  if (!token) {
    init = {
      method: api_method,
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
    };
  } else {
    init = {
      method: api_method,
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  }

  if (post_body) init.body = post_body;
  let response = await fetch(url, init);
  let json = await response.json();
  if (json.status === 401) {
    alert("登錄逾時");
    route.push("login");
  } else return json;
};
const get_image_api = async (api_name, api_method, post_body) => {
  const url = protocol + base_url + api_name;
  const init = {
    method: api_method,
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/jpeg; charset=UTF-8",
    },
  };
  if (post_body) init.body = body;
  let response = await fetch(url, init);
  let blob = await response.blob();
  return blob;
};
const upload_image_api = async (api_name, file) => {
  const url = protocol + base_url + api_name;
  let param = new FormData();
  param.append("image", file);
  console.log(param.get("file"));
  let config = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await axios.post(url, param, config);
  console.log(response.data);
  return response.data;
};

export { send_api, get_image_api, upload_image_api };
