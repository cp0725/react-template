import React from 'react'
import { headerHeight, appName } from '@/config'
import {LogoWrap} from './style'
const Logo = props => {
  return (
    <LogoWrap height={headerHeight}>
      {
        props.foldStatus ? 
          <a href="/" className="min">
            <img src={require("@/statics/images/logoMin.png")} alt={appName} />
          </a>
        :
          <a href="/">
            <img src={require("@/statics/images/logo.png")} alt={appName} />
            <span>{appName}</span>
          </a>
      }      
    </LogoWrap>
  )
}
export default Logo