var initialState =  [];
export default function comics(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_LIST':
      return [...action.list]
    default:
      return [...state];
  }
}
