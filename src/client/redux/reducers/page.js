function page(state = 1, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
    case 'CHANGE_PRODUCT_ID':
      return 1;
    case 'INCREASE_PAGE':
      return state + 1;
    default:
      return state;
  }
}

export default page;
