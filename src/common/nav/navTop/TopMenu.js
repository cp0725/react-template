import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { MenuWrap } from './style'
import { withRouter } from "react-router-dom"
import { headerHeight, defaultNav } from '@/config'
import menuConfig from '@/config/menu'
const SubMenu = Menu.SubMenu, MenuItem = Menu.Item
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
      <MenuWrap height={headerHeight}>
        <Menu onSelect={this.selectNav} defaultSelectedKeys={defaultNav} mode="horizontal" theme="dark">
          {this.getMenuJsx(menuConfig)}
        </Menu>
      </MenuWrap>
    )
  }
  iconShow(iconType) {
    return iconType ? <Icon type={iconType} /> : null
  }
  getMenuJsx(menuList) {
    return menuList.map(item => {
      const title = <span>{this.iconShow(item.icon)}<span>{item.title}</span></span>
      return item.children ?
        <SubMenu key={item.path} title={title}>
          {this.getMenuJsx(item.children)}
        </SubMenu>
        :
        <MenuItem key={item.path}>{title}</MenuItem>
    })
  }
  selectNav({ key }) {
    this.props.history.push(key)
  }
}
export default withRouter(TopMenu)