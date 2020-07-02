const toMainPage = () => {
  return {
    type: 'TO_MAIN_PAGE'
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

export {
  toMainPage,
  categorySelected,
  productSelected,
}