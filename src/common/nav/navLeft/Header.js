import React, {Component} from 'react'
import { headerHeight } from '@/config'
import { HeaderWrap } from './style'
import User from '../user'

class Header extends Component {
  render() {
    return (
      <HeaderWrap height={headerHeight}>
        <div className="nav-name">
          应用标题/二级导航
        </div>
        <User />
      </HeaderWrap>
    )
  }
}
export default Header