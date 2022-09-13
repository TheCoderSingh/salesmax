import data from './data';

export const isSkuValid = sku => {
  for (let i = 0; i < data.length; i++) {
    if (sku === data[i].sku) return true;
  }

  return false;
};

export const getItemBySku = sku => {
  for (let i = 0; i < data.length; i++) {
    if (sku === data[i].sku) return data[i];
  }

  return 0;
};

export const isSkuInCart = (sku, cartItems) => {
  for (let i = 0; i < cartItems.length; i++) {
    if (i === cartItems.length) return false;

    if (sku === cartItems[i].sku) return true;
  }

  return false;
};

export const getSkuIndexInCart = (sku, cartItems) => {
  // Run isSkuInCart function first
  for (let i = 0; i < cartItems.length; i++) {
    if (sku === cartItems[i].sku) return i;
  }

  return false;
};
