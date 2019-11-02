import React, {Component} from 'react';
import {Button} from 'antd';
const enStrings = {
  submit: 'Submit',
  cancel: 'Cancel',
};

const cnStrings = {
  submit: '提交',
  cancel: '取消',
};

const LocalContext = React.createContext (enStrings);

class LocaleProvider extends Component {
  constructor (props) {
    super (props);
    this.state = {
      local: enStrings,
    };
  }
  toggleLocal = () => {
    const local = this.state.local === enStrings ? cnStrings : enStrings;
    this.setState ({
      local,
    });
  };
  render () {
    return (
      <LocalContext.Provider value={this.state.local}>
        <Button type="primary" onClick={this.toggleLocal}>切换语言</Button>
        {this.props.children}
      </LocalContext.Provider>
    );
  }
}

class LocaledButtons extends Component {
  render () {
    return (
      <LocalContext.Consumer>
        {local => (
          <div>
            <Button>{local.submit}</Button>
            <Button>{local.cancel}</Button>
          </div>
        )}
      </LocalContext.Consumer>
    );
  }
}

const LocalSample = () => (
  <div>
    <LocaleProvider>
      <LocaledButtons />
    </LocaleProvider>
  </div>
);
export default LocalSample;
