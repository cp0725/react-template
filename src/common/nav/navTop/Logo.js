import React from 'react'
import {appName } from '@/config'
import { LogoWrap } from './style'
const Logo = props => {
  return (
    <LogoWrap>
      <a href="/">
        <img src={require("@/statics/images/logo.png")} alt={appName} />
        <span>{appName}</span>
      </a>
    </LogoWrap>
  )
}
export default Logo