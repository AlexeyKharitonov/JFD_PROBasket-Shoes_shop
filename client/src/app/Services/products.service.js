import httpService from "./http.service";

const productsEndPoint = "products/";

const productService = {
  get: async () => {
    const { data } = await httpService.get(productsEndPoint);
    return data;
  },
  update: async (payload, productId) => {
    const { data } = await httpService.patch(
      productsEndPoint + productId,
      payload
    );
    return data;
  },
  remove: async (productId) => {
    const { data } = await httpService.delete(productsEndPoint + productId);
    return data;
  },
};

export default productService;
