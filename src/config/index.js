// 项目名称
export const appName = '项目名称'
// 左侧菜单宽度
export const leftMenuWidth = '200px'
// 头部高度
export const headerHeight = '60px'
// 功能区 padding
export const mainMargin = '16px 0 16px 16px'
// 左侧菜单是否可以收回
export const showNavFold = true
// 只保持展开一项菜单
export const navOpenOnly = false
// 是否启用路由懒加载
export const routerChunk = true
// 默认菜单位置 navLeft/navTop
const defaultPosition = 'NavLeft'
export const navPosition = localStorage.getItem('navPosition') || defaultPosition
// 是否允许用户切换导航位置
export const navChange = true
// 设置默认选中的菜单项
let defaultRouter = '/a'
if (window.location.pathname === '/'){
  // 直接访问根目录会定向到默认路由
  window.location.pathname = defaultRouter
}
export const defaultNav = [window.location.pathname]
