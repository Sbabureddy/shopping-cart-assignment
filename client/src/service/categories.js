export const getCategories = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/categories`).then((res) =>
    res.json()
  );
};

export const getBanners = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/banners`).then((res) =>
    res.json()
  );
};

export const getProducts = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/products`).then((res) =>
    res.json()
  );
};

export const getCartStatus = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/banners`).then((res) =>
    res.json()
  );
};
