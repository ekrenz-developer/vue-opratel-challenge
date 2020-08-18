import axios from "axios";

export default function apiCall(endpoint, body, headers, params, method) {
  return axios({
    method,
    url: endpoint,
    body,
    headers,
    params
  });
}
