import axios from 'axios';

export const userService = {
  login,
  logoff
};

function login(username, password) {
  let apiUrl = 'https://geoserviceuat-api.jobtrakka.com/oauth/token'; //Todo: remove hard code value

  let postData = {
    grant_type: 'password',
    login: username,
    password: password
  };

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  };

  return axios.post(apiUrl, postData).then(response => {
    let data = response.data;
    const { access_token } = data;

    if (access_token) {
      localStorage.setItem('user', JSON.stringify(username));
      localStorage.setItem('token', JSON.stringify(response.data));
    }
  });
}

function logoff() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}
