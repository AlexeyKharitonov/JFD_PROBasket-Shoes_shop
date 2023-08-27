import httpService from "./http.service";

const sizesEndPoint = "sizes/";

const sizesService = {
  get: async () => {
    const { data } = await httpService.get(sizesEndPoint);
    return data;
  },
};

export default sizesService;
