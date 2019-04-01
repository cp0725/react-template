import React from 'react'
import { Icon } from 'antd'
const styleWrap = {
  width: '100%',
  height: '100%',
  position: 'relative'
}
const styleIcon = {
  position: 'absolute',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  margin: 'auto',
  fontSize: '30px',
  width: '30px',
  height: '30px',
  color: '#a1a3a7'
}
const Loading = props => {
  return (
    <div style={styleWrap}>
      <Icon style={styleIcon} type="loading-3-quarters" spin />
    </div>
  )
}
export default Loading