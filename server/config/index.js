module.exports = {
  dataBaseConnection: {
    user: "root",
    password: "0000",
    host: "localhost",
  },
  dataBaseConfig: {
    // host: "localhost",
    user: "root",
    password: "0000",
    // password: "3345678",
    host: "localhost",
    // user: "henrychen",
    // password: "h6760903",
    database: "shopping_cart0117",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
  res_data: {
    auth_fail: {
      status: 401,
      msg: "用戶登錄身份已失效",
      data: {},
    },
    login_fail: {
      status: 400,
      msg: "帳號或密碼不正確",
      data: [],
    },
    route_fail: {
      status: 500,
      msg: "訪問路徑不存在",
      data: {},
    },
    query_fail: {
      status: 300,
      msg: "查詢格式非法",
      data: {},
    },
    modify_password_fail: {
      status: 303,
      msg: "修改密碼失败",
      data: {},
    },
    modify_nickname_fail: {
      status: 303,
      msg: "修改暱稱失败",
      data: {},
    },
    modify_client_fail: {
      status: 304,
      msg: "客戶不存在",
      data: {},
    },
    add_client_fail: {
      status: 305,
      msg: "客户已存在",
      data: {},
    },
  },
};
