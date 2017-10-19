// Store
import {createStore} from 'redux';
const store = createStore(function(state = {
  //默认的state状态
  count: 0
}, action) {
  switch (action.type) {
    case 'SETNAME':
      //return Object.assign({name: action.name}, state);方法或者...方法
      //返回一个新的对象到connect的第一个参数中
      return {name: action.name};
    default:
      return state
  }
});

export default store;
