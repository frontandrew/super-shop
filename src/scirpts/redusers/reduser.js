const InitialState = {
  totalCost: 18900,
  totalItems: 16,
  view: 'categories',
  activeCategory: undefined,
  activeItem: undefined,
}

const reduser = (state = InitialState, action) => {
  console.log(action.type);

  switch (action.type) {

    case 'TO_MAIN_PAGE':
      return state = {
        ...state,
        view: 'categories',
        activeCategory: undefined,
        activeItem: undefined,
      }

    case 'CATEGORY_SELECT':
      return state = {
        ...state,
        view: 'items',
        activeCategory: action.categoryId,
      }

    default:
      return state
  }
}

export default reduser;