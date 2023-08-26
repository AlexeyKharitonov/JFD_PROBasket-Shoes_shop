import httpService from "./http.service";

const feedBackEndPoint = "feedback/";

const feedBackService = {
  get: async () => {
    const { data } = await httpService.get(feedBackEndPoint);
    return data;
  },
};

export default feedBackService;
