// Store
import {createStore} from 'redux';
const store = createStore(function(state = {
  count: 0
}, action) {
  switch (action.type) {
    case 'increase':
      return {}
    case 'SETNAME':
      return {name: action.name}
    default:
      return state
  }
});

export default store;
