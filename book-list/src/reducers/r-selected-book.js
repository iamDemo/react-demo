// state is initialized to null, otherwise undefined will cause some issue
export default function(state = null, action) {
  // console.log(action.type);

  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  // do nothing, don't care about this action
  return state
}