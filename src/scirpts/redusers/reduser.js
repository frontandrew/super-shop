const InitialState = {
  cartVisible: false,
  order: [],
  totalCost: 18900,
  totalItems: 16,
  view: 'categories',
  activeCategory: undefined,
  activeProduct: undefined,
}

const updateItem = (cartItem = {}, product, quantity, idx) => {
  const { 
    id = product.id,
    title = product.title,
    price = product.price,
    rest = product.quantity,
    total = 0,
    inCart = 0,
  } = cartItem;

  quantity = quantity * idx;

  return {
    id,
    title,
    price,
    rest: rest - quantity,
    total: +(total + (price * quantity)).toFixed(2),
    inCart: inCart + +quantity,
  }
}

const updateOrderItems = (items, item, id) => {
  if (id === -1) {
    return [
      ...items,
      item
    ]
  }

  if (item.inCart === 0) {
    return [
      ...items.slice(0, id),
      ...items.slice(id + 1),
    ]
  }

  return [
    ...items.slice(0, id),
    item,
    ...items.slice(id + 1),
  ]
}

const updateOrder = (state, action, idx) => {
  const { order } = state;
  const { productItem, quantity} = action;
  
  const inCartIdx = order.findIndex(prod => prod.id === productItem.id);
  const inCartProduct = order[inCartIdx];

  const newCartItem = updateItem(inCartProduct, productItem, quantity, idx);

  return state = {
    ...state,
    order: updateOrderItems(order, newCartItem, inCartIdx),
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
      return updateOrder(state, action, 1);

    default:
      return state
  }
}

export default reduser;