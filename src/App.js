import React from 'react';
import { BrowserRouter,Route,NavLink } from 'react-router-dom'
import './App.css';
import {Menu} from 'antd';
import Comment from './example/commentExample/Comment';
import Tab from './example/tabExample/Tab';

class App extends React.Component {
  handleClick = e => {
    console.log ('click ', e);
  };
  render () {
    const menus=[
      {
        text:"评论列表实例",
        compName:"Comment"
      },
      {
        text:"tab实例",
        compName:"Tab"
      }
    ]
    return (
      <div className="App">
        <BrowserRouter>
          <div>
        <Menu
          onClick={this.handleClick}
          style={{width: 256}}
          defaultSelectedKeys={['Comment']}
          mode="inline"
        >
          {menus.map(item=>{
            return (
              <Menu.Item key={item.compName}>
                <NavLink to={`/${item.compName}`}>{item.text}</NavLink>
              </Menu.Item>)
          })}
        </Menu>
          <Route path="/" exact component={Comment}></Route>
          <Route path="/Tab" component={Tab}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
