import React, {Component} from 'react'
import { connect } from 'react-redux'
import { NavWrap, LeftWrap, RightWrap, RouterWrap, ToggleFold} from './style'
import { leftMenuWidth, mainMargin, showNavFold } from '@/config'
import { toggleFoldAction } from '@/store/nav/actionCreators'
import { Icon} from 'antd'
import LeftMenu from './LeftMenu'
import Logo from './Logo'
import Header from './Header'
class index extends Component {
  render() {
    const { toggleFold, foldStatus } = this.props
    const RouterMian = this.props.children
    const width = foldStatus ? '80px' : leftMenuWidth
    return (
      <NavWrap>
        <LeftWrap width={width}>
          <Logo foldStatus={foldStatus}/>
          <LeftMenu />
          {
            showNavFold && <ToggleFold onClick={toggleFold}>
              <Icon type={foldStatus ? 'menu-unfold' : 'menu-fold'} />
            </ToggleFold>
          }
        </LeftWrap>
        <RightWrap>
          <Header />
          <RouterWrap id="mc_waterMark" margin={mainMargin}>
            {RouterMian}
          </RouterWrap>
        </RightWrap>
      </NavWrap>
    )
  }
}
// state -> props
const mapState = state => {
  return {
    foldStatus: state.nav.foldStatus,
  }
}
// dispatch -> props
const mapDispatch = dispatch => {
  return {
    toggleFold() {
      const action = toggleFoldAction()
      dispatch(action)
    }
  }
}

const connectRedux = connect(mapState, mapDispatch)
export default connectRedux(index)