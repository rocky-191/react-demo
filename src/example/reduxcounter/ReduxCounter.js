import React, {Component} from 'react';
import {bindActionCreators, createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {Button} from 'antd';

const actionTypes = {
  plusOne: 'PLUS_ONE',
  minusOne: 'MINUS_ONE',
};
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
const store = createStore (counter);

// Action creator
function plusOne () {
  // action
  return {type: 'PLUS_ONE'};
}

function minusOne () {
  return {type: 'MINUS_ONE'};
}

class Counter extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    const {count, plusOne, minusOne} = this.props;
    return (
      <div>
        <Button onClick={plusOne}>+</Button>
        {count}
        <Button onClick={minusOne}>-</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({plusOne, minusOne}, dispatch);
};

const ConnectCounter = connect (mapStateToProps, mapDispatchToProps) (Counter);

export default class CounterSample extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectCounter />
      </Provider>
    );
  }
}
