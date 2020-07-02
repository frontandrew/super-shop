const InitialState = {
  totalCost: 18900,
  totalItems: 16,
  view: 'categories',
  activeCategory: undefined,
  activeProduct: undefined,
}

const reduser = (state = InitialState, action) => {

  console.log(action);

  switch (action.type) {

    case 'TO_MAIN_PAGE':
      return state = {
        ...state,
        view: 'categories',
        activeCategory: undefined,
        activeProduct: undefined,
      }

    case 'CATEGORY_SELECTED':
      return state = {
        ...state,
        view: 'items',
        activeCategory: action.categoryItem,
        activeProduct: undefined,
      }

    case 'PRDOUCT_SELECTED':
      return state = {
        ...state,
        view: 'product',
        activeProduct: action.productItem,
      }

    default:
      return state
  }
}

export default reduser;