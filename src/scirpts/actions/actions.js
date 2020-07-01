const toMainPage = () => {
  return {
    type: 'TO_MAIN_PAGE'
  }
}

const categorySelect = (categoryId) => {
  return {
    type: 'CATEGORY_SELECT',
    categoryId: categoryId
  }  
}  

export {
  toMainPage,
  categorySelect,
}