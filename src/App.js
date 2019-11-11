import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import './App.css';
import {Menu, Layout} from 'antd';
import Comment from './example/commentExample/Comment';
import {Tab} from './example/tabExample/Tab';
import Clock from './example/clockExample/Clock';
import LocalSample from './example/languageExample/LocalSample';
import PureRedux from './example/purereduxExample/PureRedux';
import ReduxCounter from './example/reduxcounter/ReduxCounter';
import Hook from "./example/hookExample/Hook"

const {Sider, Content} = Layout;
class App extends React.Component {
  render () {
    const menus = [
      {
        text: '评论列表实例',
        compName: 'Comment',
        component:Comment,
        exact:true
      },
      {
        text: 'tab实例',
        compName: 'Tab',
        component:Tab
      },
      {
        text: '钟表实例',
        compName: 'Clock',
        component:Clock
      },
      {
        text: '语言切换实例',
        compName: 'LocalSample',
        component:LocalSample
      },
      {
        text: 'PureRedux实例',
        compName: 'PureRedux',
        component:PureRedux
      },
      {
        text: 'ReduxCounter实例',
        compName: 'ReduxCounter',
        component:ReduxCounter
      },
      {
        text:"hook实例",
        compName:"Hook",
        component:Hook
      }
    ];
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Sider width={260}>
              <Menu
                onClick={this.handleClick}
                style={{width: 256}}
                defaultSelectedKeys={['Comment']}
                mode="inline"
              >
                {menus.map ((item, index) => {
                  return (
                    <Menu.Item key={item.compName}>
                      <NavLink to={`/${index !== 0 ? item.compName : ''}`}>
                        {item.text}
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </Sider>
            <Content>
              {/* <Route path="/" exact component={Comment}></Route>
            <Route path="/Tab" component={Tab}></Route>
            <Route path="/Clock" component={Clock}></Route>
            <Route path="/LocalSample" component={LocalSample}></Route>
            <Route path="/PureRedux" component={PureRedux}></Route>
            <Route path="/ReduxCounter" component={ReduxCounter}></Route> */}
          {
            menus.map((route,index)=>{
              if(route.exact){
                return <Route exact key={index} path="/" component={route.component}/>
              }else{
                return <Route key={index} path={`/${route.compName}`} component={route.component}/>
              }
            })
          }
            </Content>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
