// Redux Store - centralized state management
import { createStore } from 'redux';

/** Initial application state. */
const initialState = {
  count: 0,
  name: '',
};

/** Root reducer handling all state transitions. */
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SETNAME':
      return { ...state, name: action.name };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
