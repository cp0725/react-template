import React from 'react'
import { Empty } from 'antd'
const wrapStyle = {
  width: '100%',
  height: '100%',
  position: 'relative'
}
const emptyStyle = {
  position: 'absolute',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  margin: 'auto',
  width: '250px',
  height: '250px',
  color: '#888'
}
const index = props => {
  return (
    <div style={wrapStyle}>
      <Empty style={emptyStyle} description="请检查访问地址（404）" />
    </div>
  )
}
export default index