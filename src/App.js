import React, { Component } from 'react'
import { BrowserRouter} from 'react-router-dom'
import Nav from '@/common/nav'
import RouterMain from './router'
import waterMark from '@/utils/waterMark'
class App extends Component {
  render() {
    return (
      // 如果线上<BrowserRouter>加载资源失败可以尝试使用<HashRouter>
      <BrowserRouter>
        <Nav>
          <RouterMain />
        </Nav>
      </BrowserRouter>
    )
  }
  componentDidMount(){
    waterMark('小菜 666888')
  }
}
export default App