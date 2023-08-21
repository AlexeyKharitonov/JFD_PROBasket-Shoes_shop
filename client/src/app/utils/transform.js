import FileConfig from "../config.json";

export const transformPath = (path) => {
  return FileConfig.apiEndPoint.replace("api", "") + path;
};
