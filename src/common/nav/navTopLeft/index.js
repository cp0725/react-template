import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { HeaderWrap, MainWrap, LeftWrap, RouterWrap, ToggleFold } from './style'
import { headerHeight, leftMenuWidth, mainMargin, showNavFold } from '@/config'
import { toggleFoldAction } from '@/store/nav/actionCreators'
import { Icon} from 'antd'
import Logo from './Logo'
import TopMenu from './TopMenu'
import LeftMenu from './LeftMenu'
import User from '../user'

class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false
    }
    this.bindEventThis()
  }
  bindEventThis(){
    this.listenTopNavChange = this.listenTopNavChange.bind(this)
  }
  render() {
    const RouterMian = this.props.children
    const { toggleFold, foldStatus } = this.props
    const width = foldStatus ? '80px' : leftMenuWidth
    return (
      <Fragment>
        <HeaderWrap height={headerHeight}>
          <Logo />
          <TopMenu listenTopNavChange={this.listenTopNavChange}/>
          <User />
        </HeaderWrap>
        <MainWrap height={headerHeight}>
          {
            this.state.menu && <LeftWrap width={width}>
              <LeftMenu menu={this.state.menu} />
              {
                showNavFold && <ToggleFold onClick={toggleFold}>
                  <Icon type={foldStatus ? 'menu-unfold' : 'menu-fold'} />
                </ToggleFold>
              }
            </LeftWrap>
          }
          <RouterWrap id="mc_waterMark" margin={mainMargin}>
            {RouterMian}
          </RouterWrap>
        </MainWrap>
      </Fragment>
    )
  }
  listenTopNavChange(menu){
    this.setState({menu})
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