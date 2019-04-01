import React from 'react'
import { Progress } from 'antd'

const index = props => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px'}}>
      <Progress style={{margin: '20px' }} width={180} type="circle" percent={75} format={percent => `${percent} Days`} />
      <Progress style={{ margin: '20px' }} width={180} type="circle" percent={100} format={() => 'Done'} />
      <Progress style={{ margin: '20px' }} width={180} type="dashboard" percent={70} format={() => 'Done'} />
    </div>
  )
}
export default index