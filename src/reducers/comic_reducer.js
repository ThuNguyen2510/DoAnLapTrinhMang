var initialState =  [];
export default function comics(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_LIST':
      return [...action.list]
    case 'SHOW_A_COMIC':
      return [action.comic,action.gen]
    case 'GET_COMIC_NAME':
      return action.name
    default:
      return [...state];
  }
}
