var initialState =  [];
export default function comics(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_LIST':
      return [...action.list]
    case 'SEARCH_BY_NAME':
      return [...action.comics]  
    default:
      return [...state];
  }
}
