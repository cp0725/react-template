/* 
 * 1. 建议最外层菜单必须设置icon，path值必填是点击菜单跳转的路由。
 * 2. path值必须唯一如果有两个菜单指向同一组件可以考虑两个不同的路由指向同一组件。
 * 3. 如果某项有children那么点击该项只是打开操作路由不会变化，此时的path属性当唯一key来使用。
 */
export default [
  {
    title: '首页',
    icon: 'dashboard',
    path: '1',
    children: [
      {
        title: '米面粮油',
        path: '/a'
      },
      {
        title: '新鲜蔬菜',
        path: '/b'
      },
      {
        title: '休闲酒饮',
        path: '/c'
      },
      {
        title: '调料干货',
        path: '/d'
      },
      {
        title: '餐厨用品',
        path: '/e'
      }
    ]
  },
  {
    title: '全部菜品',
    icon: 'video-camera',
    path: '7',
    children: [
      {
        title: '胡萝卜',
        path: '/f'
      },
      {
        title: '西红柿',
        path: '/g'
      },
      {
        title: '青椒',
        path: '/h'
      }
    ]
  },
  {
    title: '门店分类',
    icon: 'home',
    path: '11',
    children: [
      {
        title: '沙县小吃',
        path: '12'
      },
      {
        title: '兰州拉面',
        path: '13'
      },
      {
        title: '黄焖鸡',
        path: '14'
      }
    ]
  },
  {
    title: '我的订单',
    icon: 'picture',
    path: '15',
    children: [
      {
        title: '已完成订单',
        path: '16'
      },
      {
        title: '未完成订单',
        path: '17'
      }
    ]
  },
  {
    title: '个人中心',
    icon: 'mail',
    path: '18',
    children: [
      {
        title: '代付款',
        path: '19'        
      },
      {
        title: '代发货',
        path: '20'
      },
      {
        title: '待收货',
        path: '21'
      },
      {
        title: '退货订单',
        path: '22',
        children: [
          {
            title: '退货成功',
            path: '23'
          },
          {
            title: '退货失败',
            path: '24'
          },
          {
            title: '退货中',
            path: '25'
          }          
        ]
      }
    ]
  },
  {
    title: '在线客服',
    path: '/q'
  },
  {
    title: '商机加盟',
    icon: 'paper-clip',
    path: '/w'
  },
  {
    title: '问题上报',
    icon: 'setting',
    path: '28'
  }
]