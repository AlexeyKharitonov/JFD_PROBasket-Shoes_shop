import httpService from "./http.service";

const productsEndPoint = "products/";
// const oneProductEndPoint = `products/${id}`;

const productService = {
  fetchAll: async () => {
    const { data } = await httpService.get(productsEndPoint);
    return data;
  },
  // fetchOneProduct: async () => {
  //   const { data } = await httpService.get(oneProductEndPoint);
  //   return data;
  // },
};

export default productService;
