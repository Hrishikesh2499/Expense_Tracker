import { TDelete, TGet, TPatch, TPost } from "../interfaces/api.interface";

const get = (urls: TGet) => {
  return fetch(urls.join(""));
};
const post = (postData: TPost) => {
  const { urls, data, headers } = postData;
  return fetch(urls.join(""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
};
const put = (patchData: TPatch) => {
  const { urls, data, headers } = patchData;
  return fetch(urls.join(""), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
};

const deleteApi = async (urls: TDelete) => {
  return await fetch(urls.join(""), {
    method: "DELETE",
  });
};
export const api = {
  get,
  post,
  put,
  deleteApi,
};
