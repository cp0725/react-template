import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd';
import { MenuWrap} from './style'
import { withRouter } from "react-router-dom"
import { navOpenOnly, defaultNav} from '@/config'
import menuConfig from '@/config/menu'
const SubMenu = Menu.SubMenu, MenuItem = Menu.Item
class LeftMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: []
    }
    this.bindEventThis()
  }
  bindEventThis(){
    this.selectNav = this.selectNav.bind(this)
    this.openNav = this.openNav.bind(this)
  }
  render() {
    const { foldStatus } = this.props
    return (
      <MenuWrap>
        <Menu inlineCollapsed={foldStatus} onSelect={this.selectNav} onOpenChange={this.openNav} openKeys={this.state.openKeys} defaultSelectedKeys={defaultNav} mode="inline" theme="dark">
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
  selectNav({key}){
    this.props.history.push(key)
  }
  openNav(openKeys){
    if (!navOpenOnly){
      return this.setState({ openKeys })
    }
    const allKeys = menuConfig.filter(item => item.path).map(item => item.path)
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (allKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
}

// state -> props
const mapState = state => {
  return {
    foldStatus: state.nav.foldStatus,
  }
}
const connectRedux = connect(mapState, null)
export default connectRedux(withRouter(LeftMenu))