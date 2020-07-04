const toMainPage = () => {
  return {
    type: 'TO_MAIN_PAGE'
  }
}

const cartToggle = () => {
  return {
    type: 'CART_TOGGLE'
  }
}

const categorySelected = (categoryItem) => {
  return {
    type: 'CATEGORY_SELECTED',
    categoryItem
  }  
}

const productSelected = (productItem) => {
  return {
    type: 'PRDOUCT_SELECTED',
    productItem
  }
}

const productAddedToCart = (productItem, diff) => {
  return {
    type: 'PRODUCT_ADDED_TO_CART',
    productItem,
    diff
  }
}

const productRemovedFromCart = (productItem, diff) => {
  return {
    type: 'PRODUCT_REMOVED_FROM_CART',
    productItem,
    diff
  }
}

const productDeletedFromCart = (productItem, diff) => {
  return {
    type: 'PRODUCT_DELETED_FROM_CART',
    productItem,
    diff
  }
}

export {
  toMainPage,
  cartToggle,
  categorySelected,
  productSelected,
  productAddedToCart,
  productRemovedFromCart,
  productDeletedFromCart,
}