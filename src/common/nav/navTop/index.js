import React, { Component, Fragment } from 'react'
import {HeaderWrap, RouterWrap } from './style'
import { headerHeight } from '@/config'
import Logo from './Logo'
import TopMenu from './TopMenu'
import User from '../user'
class index extends Component {
  render() {
    const RouterMian = this.props.children
    return (
      <Fragment>
        <HeaderWrap height={headerHeight}>
          <Logo />
          <TopMenu />
          <User />
        </HeaderWrap>
        <RouterWrap id="mc_waterMark" height={headerHeight}>
          {RouterMian}
        </RouterWrap>
      </Fragment>
    )
  }
}
export default index