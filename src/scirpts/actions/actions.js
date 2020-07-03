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

const productAddedToCart = (productItem, addedQuantity) => {
  return {
    type: 'PRODUCT_ADDED_TO_CART',
    productItem,
    addedQuantity
  }
}

export {
  toMainPage,
  cartToggle,
  categorySelected,
  productSelected,
  productAddedToCart,
}