import axios from 'axios';

const endpoint = 'https://xxxx.xxx.xxx:8888';

const api = {
  logIn: (form) => {
    const body = {
      username: form.username,
      password: form.password,
    };
    return axios.post(`${endpoint}/login`, body);
  },
  getSigRL: (gid, ID) => axios.post(`${endpoint}/sigrl`, JSON.stringify({ gid, ID })),
  msg2: (msg2, ID) => axios.post(`${endpoint}/msg2`, JSON.stringify({ msg2, ID })),
};

export default api;
