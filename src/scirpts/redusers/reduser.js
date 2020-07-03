const InitialState = {
  cartVisible: false,
  order: [],
  totalCost: 18900,
  totalItems: 16,
  view: 'categories',
  activeCategory: undefined,
  activeProduct: undefined,
}

const updateItem = (cartItem = {}, product, addedQuantity) => {
  const { 
    id = product.id,
    title = product.title,
    price = product.price,
    rest = product.quantity,
    total = 0,
    inCart = 0,
  } = cartItem;

  return {
    id,
    title,
    price,
    rest: rest - addedQuantity,
    total: +(total + (price * addedQuantity)).toFixed(2),
    inCart: inCart + +addedQuantity,
  }
}

const updateOrderItems = (items, item, idx) => {
  if (idx === -1) {
    return [
      ...items,
      item
    ]
  }

  if (item.count === 0) {
    return [
      ...items.slice(0, idx),
      ...items.slice(idx + 1),
    ]
  }

  return [
    ...items.slice(0, idx),
    item,
    ...items.slice(idx + 1),
  ]
}

const updateOrder = (state, action) => {
  const { order } = state;
  const { productItem, addedQuantity} = action;
  
  const prodIndex = order.findIndex(prod => prod.id === productItem.id);
  const inCartProduct = order[prodIndex];

  const newCartItem = updateItem(inCartProduct, productItem, addedQuantity);

  return state = {
    ...state,
    order: updateOrderItems(order, newCartItem, prodIndex),
  };
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

    case 'PRODUCT_ADDED_TO_CART':
      return updateOrder(state, action);

    default:
      return state
  }
}

export default reduser;