const InitialState = {
  cartVisible: false,
  inCartProducts: [],
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
        cartVisible: false,
        activeCategory: undefined,
        activeProduct: undefined,
      }

    case 'CART_TOGGLE':
      return state = {
        ...state,
        cartVisible: !state.cartVisible,
      }

    case 'CATEGORY_SELECTED':
      return state = {
        ...state,
        view: 'items',
        cartVisible: false,
        activeCategory: action.categoryItem,
        activeProduct: undefined,
      }

    case 'PRDOUCT_SELECTED':
      return state = {
        ...state,
        view: 'product',
        cartVisible: false,
        activeProduct: action.productItem,
      }

    default:
      return state
  }
}

export default reduser;