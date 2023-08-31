const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-local-id";

export function setTokens({
  refreshToken,
  accessToken,
  userId,
  expiresIn = 3600,
}) {
  const expiresDate = new Date().getTime() + expiresIn * 1000;
  localStorage.setItem(USERID_KEY, userId);
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}

export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY);
}

export function removeAuthData() {
  localStorage.removeItem(USERID_KEY);
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
}

export function getUserId() {
  return localStorage.getItem(USERID_KEY);
}

////////////////////////////////////////////////////////////////////////////////////////
// АДМИНКА///////////
const IS_ADMIN = "is_admin";
//!АДМИНКА УСТАНОВИТЬ
export const setAdmin = (isAdmin) => {
  localStorage.setItem(IS_ADMIN, JSON.stringify(isAdmin));
};
//ПРОВЕРИТЬ АДМИНКУ
export function getIsAdmin() {
  return JSON.parse(localStorage.getItem(IS_ADMIN));
}
//УДАЛЯЕМ АДМИНКУ
export function removeAdmin() {
  localStorage.removeItem(IS_ADMIN);
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//КОРЗИНА
const PRODUCTS_IN_CART = "products_in_cart";
//!ТОВАРЫ В КОРЗИНУ ДОБАВИТЬ
export const addProductsInCart = (product) => {
  const storedValue = localStorage.getItem(PRODUCTS_IN_CART);
  let currentProducts = [];

  if (storedValue) {
    try {
      currentProducts = JSON.parse(storedValue);
      if (!Array.isArray(currentProducts)) {
        // Если распаршенное значение не является массивом, сбросим его в пустой массив
        currentProducts = [];
      }
    } catch (error) {
      console.error("Error parsing PRODUCTS_IN_CART:", error);
      // Если возникла ошибка при разборе, сбросим значение в пустой массив
      currentProducts = [];
    }
  }
  const updatedProducts = [...currentProducts, product];
  localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(updatedProducts));
};
//ОБНОВИТЬ ТОВАРЫ В КОРЗИНЕ
export const updateProductInCart = (updatedProduct) => {
  const currentProducts = getProductsInCart() || [];
  const productIndex = currentProducts.findIndex(
    (product) => product._id === updatedProduct._id
  );

  if (productIndex !== -1) {
    currentProducts[productIndex] = updatedProduct;
    localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(currentProducts));
  }
};
//ПРОВЕРИТЬ НАЛИЧИЕ ТОВАРОВ В КОРЗИНЕ
export function getProductsInCart() {
  return JSON.parse(localStorage.getItem(PRODUCTS_IN_CART));
}
//УДАЛЯЕМ ТОВАРЫ ИЗ КОРЗИНЫ
export function removeProductsFromCart(productId) {
  const currentProducts =
    JSON.parse(localStorage.getItem(PRODUCTS_IN_CART)) || [];
  const updatedProducts = currentProducts.filter(
    (product) => product._id !== productId
  );
  localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(updatedProducts));
}
//УДАЛЯЕМ ВСЮ КОРЗИНУ
export const clearAllCart = () => {
  localStorage.removeItem(PRODUCTS_IN_CART);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//РАЗМЕРЫ///////
const SIZES_IN_CART = "sizes_in_cart";
//!РАЗМЕРЫ В КОРЗИНУ ДОБАВИТЬ
export const addSizeInCart = (size) => {
  const storedValueSize = localStorage.getItem(SIZES_IN_CART);
  let currentSizes = [];

  if (storedValueSize) {
    try {
      currentSizes = JSON.parse(storedValueSize);
      if (!Array.isArray(currentSizes)) {
        // Если распаршенное значение не является массивом, сбросим его в пустой массив
        currentSizes = [];
      }
    } catch (error) {
      // console.error("Error parsing SIZES_IN_CART:", error);
      // Если возникла ошибка при разборе, сбросим значение в пустой массив
      currentSizes = [];
    }
  }
  const updatedSizes = [...currentSizes, size];
  localStorage.setItem(SIZES_IN_CART, JSON.stringify(updatedSizes));
};
///
//ПРОВЕРИТЬ НАЛИЧИЕ РАЗМЕРОВ В КОРЗИНЕ
export function getSizesInCart() {
  return JSON.parse(localStorage.getItem(SIZES_IN_CART));
}
//ПРОВЕРИТЬ НАЛИЧИЕ КОНКРЕТНОГО РАЗМЕРА ПО id В КОРЗИНЕ
export const isSelectedCurrentSize = (id) => {
  const storedData = localStorage.getItem(SIZES_IN_CART);
  if (!storedData) return false;

  const sizesInCart = JSON.parse(storedData);

  return Boolean(sizesInCart.find((size) => size._id === id));
};
//УДАЛЯЕМ РАЗМЕРЫ ИЗ КОРЗИНЫ
export function removeSizesFromCart(sizeId) {
  const currentSizes = JSON.parse(localStorage.getItem(SIZES_IN_CART)) || [];
  const updatedSizes = currentSizes.filter((size) => size._id !== sizeId);
  localStorage.setItem(SIZES_IN_CART, JSON.stringify(updatedSizes));
}
//УДАЛЯЕМ ВСE РАЗМЕРЫ
export const clearAllCartWithSizes = () => {
  localStorage.removeItem(SIZES_IN_CART);
};

////////////////////////////////////////////////////

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  removeAuthData,
  //админка
  setAdmin,
  getIsAdmin,
  removeAdmin,
  //корзина
  addProductsInCart,
  updateProductInCart,
  getProductsInCart,
  removeProductsFromCart,
  clearAllCart,
  //размеры
  addSizeInCart,
  getSizesInCart,
  isSelectedCurrentSize, //проверка наличия размера в корзине по id
  removeSizesFromCart,
  clearAllCartWithSizes,
};

export default localStorageService;
