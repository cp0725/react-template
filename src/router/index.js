import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from '@/base/NotFound'
import loadableList from './chunkLoad'
// import loadableList2 from './wholeLoad'
const index = props => {
  return (
    <Switch>
      {
        loadableList.map(item => 
          <Route exact key={item.path} path={item.path} component={item.component}></Route>  
        )
      }
      <Route component={NotFound}></Route>  
    </Switch>
  )
}
export default index