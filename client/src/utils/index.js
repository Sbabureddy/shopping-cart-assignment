import { getBanners, getCategories, getProducts } from "service/categories";

export const getData = () => {
  const bannersPromise = getBanners();
  const categoriesPromise = getCategories();
  const productsPromise = getProducts();

  return {
    banners: wrapPromise(bannersPromise),
    categories: wrapPromise(categoriesPromise),
    products: wrapPromise(productsPromise),
  };
};

const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw suspender;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

export const total = (cartItems) =>
  cartItems.reduce(
    (ack, cartItem) => ack + cartItem.quantity * cartItem.price,
    0
  );

export const resource = getData();
