import Main from '@/components/main'
/* import parentView from '@/components/parent-view' */

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
    hideInMenu: true
  },
  component: () => import('@/view/login/login.vue')
}

export const mainPageRouter = {
  path: '/main-page',
  name: 'main-page',
  meta: {
    title: '首页',
    hideInMenu: true
  },
  component: () => import('@/view/main/main-page.vue')
}

export const page404 = {
  path: '*',
  name: 'error_404',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/view/error-page/404.vue')
}

export const page401 = {
  path: '/401',
  name: 'error_401',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/view/error-page/401.vue')
}

export const page500 = {
  path: '/500',
  name: 'error_500',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/view/error-page/500.vue')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: Main
  /* children: [
                   { path: 'order/distribution-detail',  meta: { keepAlive: false },title: '配送详情', name: 'distribution-detail', component: resolve => { require(['./views/order/distribution-detail.vue'], resolve); } },
                   { path: 'order/business-detail', meta: { keepAlive: false }, title: '业务详情', name: 'business-detail', component: resolve => { require(['./views/order/business-detail.vue'], resolve); } },
                   { path: 'order/business-handle',  meta: { keepAlive: false },title: '业务处理', name: 'business-handle', component: resolve => { require(['./views/order/business-handle.vue'], resolve); } },
                   { path: 'order/business-tanker',  meta: { keepAlive: false },title: '重车优选', name: 'business-tanker', component: resolve => { require(['./views/order/business-tanker.vue'], resolve); } },
                   { path: 'monitor/monitor-data', meta: { keepAlive: false }, title: '单站实时数据', name: 'monitor-data', component: resolve => { require(['./views/monitor/monitor-data.vue'], resolve); } },
                   { path: 'monitor/video-monitor', meta: { keepAlive: false }, title: '单站视频监控', name: 'video-monitor', component: resolve => { require(['./views/monitor/video-monitor.vue'], resolve); } },
                   { path: 'monitor/monitor-detail', meta: { keepAlive: false },title: '监控数据信息', name: 'monitor-detail', component: resolve => { require(['./views/monitor/monitor-detail.vue'], resolve); } },
                   { path: 'monitor/routine-detail', title: '常规巡检报告信息', name: 'routine-detail', component: resolve => { require(['./views/monitor/routine-detail.vue'], resolve); } },
                   { path: 'monitor/shift-add', title: '交接班巡检报告信息', name: 'shift-add', component: resolve => { require(['./views/monitor/shift-add.vue'], resolve); } },
                   { path: 'monitor/shift-detail', title: '交接班巡检报告信息', name: 'shift-detail', component: resolve => { require(['./views/monitor/shift-detail.vue'], resolve); } },
                   { path: 'box/box-detail', meta: { keepAlive: false }, title: 'LNG BOX详情', name: 'box-detail', component: resolve => { require(['./views/box/box-detail.vue'], resolve); } },
                   { path: 'equipment/fault-detail',  meta: { keepAlive: false },title: '故障单信息', name: 'fault-detail', component: resolve => { require(['./views/equipment/fault-detail.vue'], resolve); } },
                   { path: 'station/station-info',  meta: { keepAlive: false },title: '站点信息', name: 'station-info', component: resolve => { require(['./views/station/station-info.vue'], resolve); } },
                   { path: 'station/station-detail',  meta: { keepAlive: false },title: '站点信息', name: 'station-detail', component: resolve => { require(['./views/station/station-detail.vue'], resolve); } },
                   { path: 'equipment/patrol-detail',  meta: { keepAlive: false },title: '巡检记录', name: 'patrol-detail', component: resolve => { require(['./views/equipment/patrol-detail.vue'], resolve); } },
                   { path: 'system/organization-detail',  meta: { keepAlive: false },title: '企业信息', name: 'organization-detail', component: resolve => { require(['./views/system/organization-detail.vue'], resolve); } },
                   { path: 'station/station-administer',  meta: { keepAlive: false },title: '站点交易管理', name: 'station-administer', component: resolve => { require(['./views/station/station-administer.vue'], resolve); } },
                   { path: 'station/sales-statistics', meta: { keepAlive: false }, title: '销售报表', name: 'sales-statistics', component: resolve => { require(['./views/station/sales-statistics.vue'], resolve); } },
                   { path: 'station/trade-statistics', meta: { keepAlive: false }, title: '交易报表', name: 'trade-statistics', component: resolve => { require(['./views/station/trade-statistics.vue'], resolve); } },
                   { path: 'station/forms-detail', meta: { keepAlive: false }, title: '报表明细', name: 'forms-detail', component: resolve => { require(['./views/station/forms-detail.vue'], resolve); } },
                   { path: 'liquid/history-record', meta: { keepAlive: false }, title: '历史记录', name: 'history-record', component: resolve => { require(['./views/liquid/history-record.vue'], resolve); } },
                   { path: 'urgent/hazardous-detail', meta: { keepAlive: false }, title: '危害信息', name: 'hazardous-detail', component: resolve => { require(['./views/urgent/hazardous-detail.vue'], resolve); } },
                   { path: 'box/recharge-detail', meta: { keepAlive: false }, title: 'box充值', name: 'recharge-detail', component: resolve => { require(['./views/box/recharge-detail.vue'], resolve); } },
                   { path: 'box/recharge-record', meta: { keepAlive: false }, title: 'box记录', name: 'recharge-record', component: resolve => { require(['./views/box/recharge-record.vue'], resolve); } },
                   { path: 'box/ali-recharge', meta: { keepAlive: false }, title: '支付宝充值', name: 'ali-recharge', component: resolve => { require(['./views/box/ali-recharge.vue'], resolve); } },
                   { path: 'yard/yard-detail', meta: { keepAlive: false }, title: '堆场管理信息', name: 'yard-detail', component: resolve => { require(['./views/yard/yard-detail.vue'], resolve); } },

                   { path: 'monitor/inspect-add', meta: { keepAlive: false }, title: '站点巡检项信息', name: 'inspect-add', component: resolve => { require(['./views/monitor/inspect-add.vue'], resolve); } },
                   { path: 'equipment/equipInspect-add', meta: { keepAlive: false }, title: '站点巡检项信息', name: 'equipInspect-add', component: resolve => { require(['./views/monitor/inspect-add.vue'], resolve); } },

               ] */
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/',
    name: '_home',
    access: 1,
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        access: 1,
        meta: { hideInMenu: true, title: '首页', notCache: true, icon: 'md-home' },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/amap',
    name: 'amap',
    access: 1,
    component: Main,
    meta: {
      icon: 'ios-book',
      title: '地图'
    },
    children: [
      {
        path: '/amap_page',
        name: 'amap_page',
        access: 1,
        meta: { title: '地图', notCache: true, icon: 'ios-book' },
        component: () => import('@/view/amap/amap')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    access: 1,
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        access: 1,
        meta: { icon: 'md-notifications', title: '消息中心' },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/curd_components',
    name: 'curd_components',
    access: 1,
    meta: {
      icon: 'ios-book',
      title: 'curd组件'
    },
    component: Main,
    children: [
      {
        path: '/page-table',
        name: 'page-table',
        access: 1,
        meta: { icon: 'md-browsers', title: '分页表格' },
        component: () => import('@/view/curd-components/page-table/page-table.vue')
      },
      {
        path: '/auto-form',
        name: 'auto-form',
        access: 1,
        meta: { icon: 'md-clipboard', title: '自动表单', notCache: true },
        component: () => import('@/view/curd-components/auto-form/auto-form.vue')
      },
      {
        path: '/modal-form',
        name: 'modal-form',
        access: 1,
        meta: { icon: 'md-albums', title: '模态框表单', notCache: true },
        component: () => import('@/view/curd-components/modal-form/modal-form.vue')
      },
      {
        path: '/search-bar',
        name: 'search-bar',
        access: 1,
        meta: { icon: 'ios-search', title: '搜索框' },
        component: () => import('@/view/curd-components/search-bar/search-bar.vue')
      },
      {
        path: '/curd-page',
        name: 'curd-page',
        access: 1,
        meta: { icon: 'ios-albums', title: '综合实例' },
        component: () => import('@/view/curd-components/curd-page/curd-page.vue')
      }
    ]
  },
  {
    path: '/echarts',
    name: 'echarts',
    access: 1,
    meta: {
      icon: 'ios-book',
      title: 'echarts图表'
    },
    component: Main,
    children: [
      {
        path: '/liquidfill-echarts',
        name: 'liquidfill-echarts',
        access: 1,
        meta: { icon: 'md-browsers', notCache: true, title: '水球' },
        component: () => import('@/view/echarts/liquidfill-echarts.vue')
      },
      {
        path: '/line-echarts',
        name: 'line-echarts',
        access: 1,
        meta: { icon: 'md-browsers', notCache: true, title: '折线图' },
        component: () => import('@/view/echarts/line-echarts.vue')
      },
      {
        path: '/bar-echarts',
        name: 'bar-echarts',
        access: 1,
        meta: { icon: 'md-browsers', notCache: true, title: '柱状图' },
        component: () => import('@/view/echarts/bar-echarts.vue')
      },
      {
        path: '/map-echarts',
        name: 'map-echarts',
        access: 1,
        meta: { icon: 'md-browsers', notCache: true, title: '地图' },
        component: () => import('@/view/echarts/map-echarts.vue')
      }
    ]
  },
  {
    path: '/videos',
    name: 'videos',
    access: 1,
    meta: {
      icon: 'ios-book',
      title: '测试'
    },
    component: Main,
    children: [
      {
        path: '/video-page',
        name: 'video-page',
        access: 1,
        meta: { title: '视频', notCache: true, icon: 'ios-book' },
        component: () => import('@/view/videos/video-page.vue')
      },
      {
        path: '/music-page',
        name: 'music-page',
        access: 1,
        meta: { icon: 'md-browsers', title: '音乐', notCache: true },
        component: () => import('@/view/videos/music-page.vue')
      },
      {
        path: '/audio-page',
        name: 'audio-page',
        access: 1,
        meta: { icon: 'md-browsers', title: '音频', notCache: true },
        component: () => import('@/view/videos/audio-page.vue')
      }
    ]
  }
  /* {
              path: '/text',
              name: 'text',
              access: 1,
              component: Main,
              meta: {
                  icon: 'ios-book',
                  title: '地图'
              },
              children: [
                  {
                      path: '/video-page',
                      name: 'video-page',
                      access: 1,
                      meta: {title: '地图', notCache: true, icon: 'ios-book'},
                      component: () => import('@/view/text/video-page')
                  }
              ]
          }, */
  /* {
                  path: '/components',
                  name: 'components',
                  meta: {
                      icon: 'logo-buffer',
                      title: '组件'
                  },
                  component: Main,
                  children: [
                      {
                          path: 'count_to_page',
                          name: 'count_to_page',
                          meta: {
                              icon: 'md-trending-up',
                              title: '数字渐变'
                          },
                          component: () => import('@/view/components/count-to/count-to.vue')
                      },
                      {
                          path: 'drag_list_page',
                          name: 'drag_list_page',
                          meta: {
                              icon: 'ios-infinite',
                              title: '拖拽列表'
                          },
                          component: () => import('@/view/components/drag-list/drag-list.vue')
                      },
                      {
                          path: 'drag_drawer_page',
                          name: 'drag_drawer_page',
                          meta: {
                              icon: 'md-list',
                              title: '可拖拽抽屉'
                          },
                          component: () => import('@/view/components/drag-drawer')
                      },
                      {
                          path: 'org_tree_page',
                          name: 'org_tree_page',
                          meta: {
                              icon: 'ios-people',
                              title: '组织结构树'
                          },
                          component: () => import('@/view/components/org-tree')
                      },
                      {
                          path: 'tree_table_page',
                          name: 'tree_table_page',
                          meta: {
                              icon: 'md-git-branch',
                              title: '树状表格'
                          },
                          component: () => import('@/view/components/tree-table/index.vue')
                      },
                      {
                          path: 'cropper_page',
                          name: 'cropper_page',
                          meta: {
                              icon: 'md-crop',
                              title: '图片裁剪'
                          },
                          component: () => import('@/view/components/cropper/cropper.vue')
                      },
                      {
                          path: 'tables_page',
                          name: 'tables_page',
                          meta: {
                              icon: 'md-grid',
                              title: '多功能表格'
                          },
                          component: () => import('@/view/components/tables/tables.vue')
                      },
                      {
                          path: 'split_pane_page',
                          name: 'split_pane_page',
                          meta: {
                              icon: 'md-pause',
                              title: '分割窗口'
                          },
                          component: () => import('@/view/components/split-pane/split-pane.vue')
                      },
                      {
                          path: 'markdown_page',
                          name: 'markdown_page',
                          meta: {
                              icon: 'logo-markdown',
                              title: 'Markdown编辑器'
                          },
                          component: () => import('@/view/components/markdown/markdown.vue')
                      },
                      {
                          path: 'editor_page',
                          name: 'editor_page',
                          meta: {
                              icon: 'ios-create',
                              title: '富文本编辑器'
                          },
                          component: () => import('@/view/components/editor/editor.vue')
                      },
                      {
                          path: 'icons_page',
                          name: 'icons_page',
                          meta: {
                              icon: '_bear',
                              title: '自定义图标'
                          },
                          component: () => import('@/view/components/icons/icons.vue')
                      }
                  ]
              },
              {
                  path: '/tools_methods',
                  name: 'tools_methods',
                  meta: {
                      hideInBread: true
                  },
                  component: Main,
                  children: [
                      {
                          path: 'tools_methods_page',
                          name: 'tools_methods_page',
                          meta: {
                              icon: 'ios-hammer',
                              title: '工具方法',
                              beforeCloseName: 'before_close_normal'
                          },
                          component: () => import('@/view/tools-methods/tools-methods.vue')
                      }
                  ]
              },
              {
                  path: '/error_logger',
                  name: 'error_logger',
                  meta: {
                      hideInBread: true,
                      hideInMenu: true
                  },
                  component: Main,
                  children: [
                      {
                          path: 'error_logger_page',
                          name: 'error_logger_page',
                          meta: {
                              icon: 'ios-bug',
                              title: '错误收集'
                          },
                          component: () => import('@/view/single-page/error-logger.vue')
                      }
                  ]
              },
              {
                  path: '/directive',
                  name: 'directive',
                  meta: {
                      hideInBread: true
                  },
                  component: Main,
                  children: [
                      {
                          path: 'directive_page',
                          name: 'directive_page',
                          meta: {
                              icon: 'ios-navigate',
                              title: '指令'
                          },
                          component: () => import('@/view/directive/directive.vue')
                      }
                  ]
              },
              {
                  path: '/multilevel',
                  name: 'multilevel',
                  meta: {
                      icon: 'md-menu',
                      title: '多级菜单'
                  },
                  component: Main,
                  children: [
                      {
                          path: 'level_2_1',
                          name: 'level_2_1',
                          meta: {
                              icon: 'md-funnel',
                              title: '二级-1'
                          },
                          component: () => import('@/view/multilevel/level-2-1.vue')
                      },
                      {
                          path: 'level_2_2',
                          name: 'level_2_2',
                          meta: {
                              access: ['super_admin'],
                              icon: 'md-funnel',
                              showAlways: true,
                              title: '二级-2'
                          },
                          component: parentView,
                          children: [
                              {
                                  path: 'level_2_2_1',
                                  name: 'level_2_2_1',
                                  meta: {
                                      icon: 'md-funnel',
                                      title: '三级'
                                  },
                                  component: () => import('@/view/multilevel/level-2-2/level-2-2-1.vue')
                              },
                              {
                                  path: 'level_2_2_2',
                                  name: 'level_2_2_2',
                                  meta: {
                                      icon: 'md-funnel',
                                      title: '三级'
                                  },
                                  component: () => import('@/view/multilevel/level-2-2/level-2-2-2.vue')
                              }
                          ]
                      },
                      {
                          path: 'level_2_3',
                          name: 'level_2_3',
                          meta: {
                              icon: 'md-funnel',
                              title: '二级-3'
                          },
                          component: () => import('@/view/multilevel/level-2-3.vue')
                      }
                  ]
              },
              {
                  path: '/argu',
                  name: 'argu',
                  meta: {
                      hideInMenu: true
                  },
                  component: Main,
                  children: [
                      {
                          path: 'params/:id',
                          name: 'params',
                          meta: {
                              icon: 'md-flower',
                              title: route => `{{ params }}-${route.params.id}`,
                              notCache: true,
                              beforeCloseName: 'before_close_normal'
                          },
                          component: () => import('@/view/argu-page/params.vue')
                      },
                      {
                          path: 'query',
                          name: 'query',
                          meta: {
                              icon: 'md-flower',
                              title: route => `{{ query }}-${route.query.id}`,
                              notCache: true
                          },
                          component: () => import('@/view/argu-page/query.vue')
                      }
                  ]
              }, */
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  mainPageRouter,
  otherRouter,
  ...appRouter,
  page500,
  page401,
  page404
]
