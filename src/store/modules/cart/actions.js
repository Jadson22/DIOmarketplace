export function addToCartRequest(id) {
  return {
    type: '@user/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@user/ADD_SUCCESS',
    product,
  };
}
