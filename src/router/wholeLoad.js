// 路由全量加载
import routerConfig from '@/config/router'

const list = routerConfig.map(item => {
  return {
    ...item,
    component: require('@/pages' + item.componentUrl)
  }
})

console.log(list)

export default list