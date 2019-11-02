import React from 'react';
import {createStore,combineReducers,bindActionCreators} from 'redux';
import { Button } from 'antd';

const actionTypes = {
  plusOne: 'PLUS_ONE',
  minusOne: 'MINUS_ONE',
  customCount: 'CUSTOM_COUNT',
};
function Run () {
  // init state
  const initalState = {count: 0};

  // reducer
  const counter = (state = initalState, action) => {
    switch (action.type) {
      case actionTypes.plusOne:
        return {count: state.count + 1};
      case actionTypes.minusOne:
        return {count: state.count - 1};
      case actionTypes.customCount:
        return {count: state.count + action.payload.count};
      default:
        break;
    }
    return state;
  };

  const todos=(state={})=>state;

  const store = createStore (combineReducers({
    counter,
    todos
  }));

  // Action creator
  function plusOne () {
    // action
    return {type: 'PLUS_ONE'};
  }

  function minusOne () {
    return {type: 'MINUS_ONE'};
  }

  function customCount (count) {
    return {type: 'CUSTOM_COUNT', payload: {count}};
  }

  store.subscribe(()=>console.log(store.getState()))

  // 派发action方式一
//   store.dispatch(plusOne())
//   store.dispatch(minusOne())
//   store.dispatch(customCount(5))
  // 派发action方式二
  // eslint-disable-next-line no-func-assign
  plusOne=bindActionCreators(plusOne,store.dispatch);
  // eslint-disable-next-line no-func-assign
  minusOne=bindActionCreators(minusOne,store.dispatch);
  // eslint-disable-next-line no-func-assign
  customCount=bindActionCreators(customCount,store.dispatch);
  plusOne();
  minusOne();
  customCount(5);
}

export default ()=>{
    return (
        <div>
            <h1>redux 执行流程</h1>
            <Button type="primary" onClick={Run}>run</Button>
            <p>打开控制台查看store变化</p>
        </div>
    )
}
