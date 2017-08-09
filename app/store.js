// Store
import {createStore} from 'redux';
const store = createStore(function(state = {
  count: 0
}, action) {
  switch (action.type) {
    case 'SETNAME':
      return Object.assign({
        name: action.name
      }, state);
    default:
      return state
  }
});

export default store;
