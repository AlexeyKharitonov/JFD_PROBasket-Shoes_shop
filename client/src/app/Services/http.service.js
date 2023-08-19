import axios from "axios";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";
import authService from "./authService";

const http = axios.create({
  baseURL: configFile.apiEndPoint,
});

http.interceptors.request.use(
  async function (config) {
    const expiresDate = localStorageService.getTokenExpiresDate();
    const refreshToken = localStorageService.getRefreshToken();
    const isExpired = refreshToken && expiresDate < Date.now();

    const containSlash = /\/$/gi.test(config.url);
    //тут исправил
    config.url = containSlash ? config.url.slice(0, -1) : config.url + ".json";

    //
    if (isExpired) {
      const data = await authService.refresh();
      localStorageService.setTokens(data);
    }
    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    //
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

export default httpService;
