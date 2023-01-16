const protocol = "http://";
const port = "8080";
const base_url = `192.168.85.160:${port}/api`;
const send_api = async (api_name, api_method, post_body) => {
  const url = protocol + base_url + api_name;
  // const url = '../../newOrderTest.json'
  const init = {
    method: api_method,
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
  };

  if (post_body) init.body = post_body;
  let response = await fetch(url, init);
  let json = await response.json();
  return json;
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

export { send_api, get_image_api };
