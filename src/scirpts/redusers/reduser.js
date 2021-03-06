const InitialState = {
  cartVisible: false,
  order: [],
  totalCost: 0,
  totalItems: 0,
  view: 'categories',
  payment: false,
  activeCategory: undefined,
  activeProduct: undefined,
}

const updateItem = (cartItem = {}, product, diff) => {
  const {
    id = product.id,
    title = product.title,
    price = product.price,
    quantity = product.quantity,
    rest = product.quantity,
    total = 0,
    inCart = 0,
  } = cartItem;

  return {
    id,
    title,
    price,
    quantity,
    rest: rest - diff,
    total: +(total + (price * diff)).toFixed(2),
    inCart: inCart + +diff,
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

const updateTotals = (order) => {
  let newTotalCost = 0, newTotalItems = 0;

  order.forEach(item => {
    newTotalCost = +(newTotalCost + item.total).toFixed(2);
    newTotalItems = newTotalItems + item.inCart;
  })

  return { newTotalCost, newTotalItems }
}

const updateOrder = (state, action) => {
  const { order } = state;
  const { productItem, diff } = action;

  const inCartIdx = order.findIndex(prod => prod.id === productItem.id);
  const inCartProduct = order[inCartIdx];

  const newCartItem = updateItem(inCartProduct, productItem, diff);
  const newOrder = updateOrderItems(order, newCartItem, inCartIdx);
  const { newTotalCost, newTotalItems } = updateTotals(newOrder);

  return state = {
    ...state,
    order: newOrder,
    totalCost: newTotalCost,
    totalItems: newTotalItems,
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

    case 'PRODUCT_REMOVED_FROM_CART':
      return updateOrder(state, action);

    case 'PRODUCT_DELETED_FROM_CART':
      return updateOrder(state, action);

    case 'START_PAYMENT':
      return {
        ...state,
        cartVisible: false,
        payment: 'progress',
      }

    case 'DONE_PAYMENT':
      return {
        ...state,
        payment: 'done',
      }

    case 'CLOSE_ORDER_LIST':
      return InitialState;

    default:
      return state;
  }
}

export default reduser;