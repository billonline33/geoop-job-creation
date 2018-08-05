function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  let token = JSON.parse(localStorage.getItem("token"));

  if (user && token.access_token) {
    return { Authorization: "Bearer " + token.access_token };
  } else {
    return {};
  }
}

export default authHeader;
