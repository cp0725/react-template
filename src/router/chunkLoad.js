// 路由按需加载基于 react-loadable
import Loadable from 'react-loadable'
import Loading from '@/base/loading'
import routerConfig from '@/config/router'

const loadableList = routerConfig.map(item => ({
  ...item,
  component: Loadable({
    loader: () => import('@/pages' + item.componentUrl), // 加载路由组件
    loading: Loading  // 在加载js的时候显示的Loading动画
  })
}))
export default loadableList