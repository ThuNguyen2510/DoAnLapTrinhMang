var initialState =  [];
export default function chapters(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_LIST_CHAPTERS':
      return [...action.chaps]
    case 'GET_A_CHAPTER':
      return action.chap
    default:
      return [...state]
  }
}