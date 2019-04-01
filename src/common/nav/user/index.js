import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd';
import { headerHeight, navChange } from '@/config'
import { UserDropdown, UserWrap } from './style'
const iconStyle = {
  paddingRight: '5px'
}
const clickMenuItem = ({key}) => {
  if (key === 'NavTopLeft' || key === 'NavTop' || key === 'NavLeft'){
    localStorage.setItem('navPosition', key)
    window.location.reload()
  }
}
const menu = (
  <Menu onClick={clickMenuItem}>
    <Menu.Item className="hover-no-style">
      <UserWrap>
        <p><Icon style={iconStyle} type="user" />小菜</p>
        <p className="droit">超级管理员，技术支持</p>
      </UserWrap>
    </Menu.Item>
    <Menu.Divider />
    {
      navChange && <Menu.Item key="NavTopLeft">
        <p><Icon style={iconStyle} type="appstore" />左侧+顶部</p>
      </Menu.Item>
    }
    {
      navChange && <Menu.Item key="NavTop">
        <p><Icon style={iconStyle} type="appstore" />顶部导航</p>
      </Menu.Item>
    }
    {
      navChange && <Menu.Item key="NavLeft">
        <p><Icon style={iconStyle} type="appstore" />左侧导航</p>
      </Menu.Item>
    }
    <Menu.Item>
      <p><Icon style={iconStyle} type="setting" />设置</p>
    </Menu.Item>
    <Menu.Item>
      <p><Icon style={iconStyle} type="logout" />退出</p>
    </Menu.Item>
  </Menu>
)
class User extends Component {
  render() {
    return (
      <UserDropdown height={headerHeight}>
        <Dropdown overlay={menu}>
          <p>
            美菜用户
            <Icon type="caret-down" />
          </p>
        </Dropdown>
      </UserDropdown>
    )
  }
}
export default User