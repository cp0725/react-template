import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { TopMenuWrap } from './style'
import { withRouter } from "react-router-dom"
import { headerHeight, defaultNav } from '@/config'
import menuConfig from '@/config/menu'
const MenuItem = Menu.Item
class TopMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.bindEventThis()
  }
  bindEventThis() {
    this.selectNav = this.selectNav.bind(this)
  }
  render() {
    return (
      <TopMenuWrap height={headerHeight}>
        <Menu onSelect={this.selectNav} defaultSelectedKeys={defaultNav} mode="horizontal" theme="dark">
          {
            menuConfig.map(item => 
              <MenuItem key={item.path}>
                <span>
                  {item.icon && <Icon type={item.icon} />}
                  <span>{item.title}</span>
                </span>
              </MenuItem>
            )
          }
        </Menu>
      </TopMenuWrap>
    )
  }
  selectNav({ key }) {
    const noWmenu = menuConfig.filter(item => item.path === key)[0]
    if (noWmenu.children){
      this.props.listenTopNavChange(noWmenu.children)
    }else{
      this.props.history.push(key)
      this.props.listenTopNavChange(false)
    }
  }
}
export default withRouter(TopMenu)