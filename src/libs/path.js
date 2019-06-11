/**
 * 定义接口路径
 */
const ENV = process.env.NODE_ENV
const ssoUrl = ENV === 'development'
  ? '/sso/' // 开发环境地址 已起代理
  : ENV === 'production'
    ? '/'
    : 'https://debug.url.com'

const apiUrl = ENV === 'development'
  ? '/api/' // 开发环境地址 已起代理
  : ENV === 'production'
    ? '/'
    : 'https://debug.url.com'

const mapUrl = ENV === 'development'
  ? '/map/' // 开发环境地址 已起代理
  : ENV === 'production'
    ? '/'
    : 'https://debug.url.com'

const smesUrl = ENV === 'development'
  ? '/smes/' // 开发环境地址 已起代理
  : ENV === 'production'
    ? '/'
    : 'https://debug.url.com'

const smsUrl = ENV === 'development'
  ? '/sms/' // 开发环境地址 已起代理
  : ENV === 'production'
    ? '/'
    : 'https://debug.url.com'

const utilUrl = ENV === 'development'
  ? '/util/' // 开发环境地址 已起代理
  : ENV === 'production'
    ? '/'
    : 'https://debug.url.com'

const wxUrl = ENV === 'development'
  ? '/wx/' // 开发环境地址 已起代理
  : ENV === 'production'
    ? '/'
    : 'https://debug.url.com'

// 接口地址
const path = {
  upload: apiUrl + 'manage/upload/upload', // 上传附件接口

  getGeoCoder: mapUrl, // 地图省市区编码

  importCompany: ssoUrl + 'manage/system/company/import', // 导入公司
  importStation: ssoUrl + 'manage/system/station/import', // 导入站点

  login: ssoUrl + 'sso/login', // 用户登录
  userLogin: ssoUrl + 'sso/v2/login', // 用户账号密码登陆v2
  logout: ssoUrl + 'sso/logout', // 用户登出
  reg: ssoUrl + 'sso/reg', // 用户注册
  associateUser: ssoUrl + 'sso/open/associateUser', // 第三方登录
  resetPwd: ssoUrl + 'sso/reset', // 重置密码

  fetchQrCode: ssoUrl + 'sso/qrCode/fetch', // 扫码登陆获取二维码
  loginQrCode: ssoUrl + 'sso/qrCode/login', // 扫码登陆
  qrConnect: smesUrl + 'sse/qrAuth/connect', // 推送通道连接

  sendRegisterSms: smsUrl + 'sms/verificationCode/register', // 发送注册验证码
  sendDeteleSms: smsUrl + 'sms/verificationCode/delete', // 发送注册验证码
  verificationCode: smsUrl + 'sms/verificationCode', // 发送注册验证码

  // 导出接口
  exportStationForms: apiUrl + 'manage/stationPort/export', // 导出站点报表接口
  exportHistoryData: apiUrl + 'manage/historyData/export', // 导出站点报表接口
  exportStationFlowMoney: apiUrl + 'manage/stationFlowMoney/export', // 导出站点充值消费报表
  exportStationPriceConsumption: apiUrl + 'manage/stationPriceConsumption/export', // 导出站点单价累计消耗
  exportStationTrade: apiUrl + 'manage/stationTrade/export', // 导出站点交易明细列表
  exportRequireOrderList: apiUrl + 'manage/order/require/export', // 采购预警列表导出

  /* 日志管理 */
  getLogList: ssoUrl + 'manage/system/log/list', // 日志列表
  delLog: ssoUrl + 'manage/system/log/delete', // 删除日志

  /* 用户行为分析 */
  monthCounts: ssoUrl + 'manage/system/behavior/month/counts', // 每月用户增长量
  companyPercent: ssoUrl + 'manage/system/behavior/company/user/percent', // 不同类型公司的用户占比
  modulePercent: ssoUrl + 'manage/system/behavior/module/user/percent', // 不同模块访问占比

  /* 组织管理 */
  OrganizationCreate: ssoUrl + 'manage/organization/create', // 新增组织
  OrganizationDelete: ssoUrl + 'manage/organization/delete', // 删除组织
  OrganizationList: ssoUrl + 'manage/organization/list', // 组织列表
  OrganizationUpdate: ssoUrl + 'manage/organization/update', // 修改组织

  /* 机构管理 */
  addCompany: ssoUrl + 'manage/system/company/create', // 增加机构
  getCompanyInfo: ssoUrl + 'manage/system/company/detail', // 获取机构详情
  getCompanyList: ssoUrl + 'manage/system/company/list', // 获取机构列表
  deleteCompany: ssoUrl + 'manage/system/company/delete', // 删除机构
  getRelationCompanyList: ssoUrl + 'manage/system/company/relationCompanyList', // 关联机构列表
  updateCompany: ssoUrl + 'manage/system/company/update', // 修改机构
  getStationListByCompany: ssoUrl + 'manage/system/company/station/vehicle/list', // 公司下面的站点和车辆列表
  getRelatedListByCompany: ssoUrl + 'manage/system/company/relatedList', // 公司下面的相关列表（用户、车辆、站点）

  /* 权限管理 */
  createPermission: ssoUrl + 'manage/system/permission/create', // 新增权限
  deletePermission: ssoUrl + 'manage/system/permission/delete', // 删除权限
  PermissionList: ssoUrl + 'manage/system/permission/list', // 权限列表
  PermissionRole: ssoUrl + 'manage/system/permission/role', // 角色权限列表
  PermissionUpdate: ssoUrl + 'manage/system/permission/update', // 修改权限
  PermissionUser: ssoUrl + 'manage/system/permission/user', // 用户权限列表
  /* 角色管理 */
  createRole: ssoUrl + 'manage/system/role/create', // 新增角色
  deleteRole: ssoUrl + 'manage/system/role/delete', // 删除角色
  listRole: ssoUrl + 'manage/system/role/list', // 角色列表
  permissionRole: ssoUrl + 'manage/system/role/permission', // 角色权限
  updateRole: ssoUrl + 'manage/system/role/update', // 修改角色

  /* 用户管理 */
  createUser: ssoUrl + 'manage/system/user/create', // 新增用户
  deleteUser: ssoUrl + 'manage/system/user/delete', // 删除用户
  resetPassword: ssoUrl + 'manage/system/user/reset/password', // 重置用户密码
  listUser: ssoUrl + 'manage/system/user/list', // 用户列表
  organizationUser: ssoUrl + 'manage/system/user/organization', // 用户组织
  permissionUser: ssoUrl + 'manage/system/user/permission', // 用户权限
  roleUser: ssoUrl + 'manage/system/user/role', // 用户角色
  getRoleUser: ssoUrl + 'manage/system/user/create/role', // 创建修改用户时获取角色列表
  updateUser: ssoUrl + 'manage/system/user/update', // 修改用户
  organizationByUser: ssoUrl + 'manage/system/user/organization/{id}', // 修改用户
  getUserDetail: ssoUrl + 'manage/system/user/detail', // 获取当前用户信息
  getUserSubject: ssoUrl + 'manage/session/v2/subject', // 获取当前用户登录后实体

  getUserPermission: ssoUrl + 'manage/system/v2/permission/user', // 获取用户权限
  bindingStation: ssoUrl + 'manage/system/user/binding-station', // 用户绑定站点
  getBindingStationList: ssoUrl + 'manage/system/user/untie-station', // 用户解除站点前数据
  cancelBindingStation: ssoUrl + 'manage/system/user/untie-station', // 用户解除站点绑定
  getUnbindStationList: ssoUrl + 'manage/system/user/binding-station', // 根据公司id和用户id获取未绑定的站点列表

  select: apiUrl + 'manage/widget/select/station',

  /* APP版本管理 */
  getAppVersion: ssoUrl + 'manage/app/version/list', // 获取APP版本列表
  createAppVersion: ssoUrl + 'manage/app/version/create', // 创建新APP版本
  deleteAppVersion: ssoUrl + 'manage/app/version/delete', // 删除APP版本

  /* 系统更新管理 */
  getMaintenanceNoticeList: ssoUrl + 'manage/system/maintenance/notice/list', // 系统维护通知列表
  getMaintenanceNoticeDetail: ssoUrl + 'manage/system/maintenance/notice/detail', // 系统维护通知详情
  addMaintenanceNotice: ssoUrl + 'manage/system/maintenance/notice/add', // 新增系统维护通知
  updateMaintenanceNotice: ssoUrl + 'manage/system/maintenance/notice/update', // 修改未发布的系统维护通知
  publishMaintenanceNotice: ssoUrl + 'manage/system/maintenance/notice/publish', // 发布系统维护通知
  deleteMaintenanceNotice: ssoUrl + 'manage/system/maintenance/notice/delete', // 删除未发布的系统维护通知

  /* 品牌宣传信息 */
  getBrandMessageList: apiUrl + 'manage/brand/message/list', // 文章列表
  addBrandMessage: apiUrl + 'manage/brand/message/add', // 新增文章
  deleteBrandMessage: apiUrl + 'manage/brand/message/delete', // 删除文章
  updateBrandMessage: apiUrl + 'manage/brand/message/update', // 修改文章

  /* 配送管理 */
  getRequireOrderList: apiUrl + 'manage/delivery/require-order/list', // 需求订单列表
  addRequireOrder: apiUrl + 'manage/delivery/require-order/add', // 新建需求订单
  delRequireOrder: apiUrl + 'manage/delivery/require-order/delete', // 删除需求订单
  modRequireOrder: apiUrl + 'manage/delivery/require-order/update', // 修改需求订单
  confirmBusinessOrder: apiUrl + 'manage/delivery/business-order/confirm', // 修改需求订单
  getAddRequireOrder: apiUrl + 'manage/delivery/require-order/add', // 需求订单新增前数据(贸易公司信息)

  getBusinessOrderList: apiUrl + 'manage/delivery/business-order/list', // 业务订单列表
  getBusinessOrderDetail: apiUrl + 'manage/delivery/business-order/detail', // 查看业务订单详情
  getBusinessHeavyCar: apiUrl + 'manage/delivery/business-order/handle-heavy-car', // 业务订单处理重车辆信息
  getBusinessOrderHandleLiquid: apiUrl + 'manage/delivery/business-order/handle-liquid', // 业务订单处理前液厂信息
  getBusinessOrderHandleCar: apiUrl + 'manage/delivery/business-order/handle-car', // 业务订单处理前车辆信息
  getLiquidFactoryPriceSale: apiUrl + 'manage/liquid/factory/price/sale/list', // 接货价格列表
  handleBusinessOrder: apiUrl + 'manage/delivery/business-order/handle', // 处理业务订单
  cancelBusinessOrder: apiUrl + 'manage/delivery/business-order/cancel', // 处理业务订单

  getSendOrderList: apiUrl + 'manage/delivery/send-order/list', // 配送订单列表
  getSendOrderDetailList: apiUrl + 'manage/delivery/send-order/detail', // 配送订单详情
  sendSendOrder: apiUrl + 'manage/delivery/send-order/send', // 开始配送
  loadingSendOrder: apiUrl + 'manage/delivery/send-order/truck-loading', // 装车
  arriveLogisticsOrder: apiUrl + 'manage/delivery/logistics-order/arrive', // 送达
  cancelLogisticsOrder: apiUrl + 'manage/delivery/logistics-order/cancel', // 取消
  confirmLogisticsOrder: apiUrl + 'manage/delivery/logistics-order/driver-confirm', // 司机确认
  refuseLogisticsOrder: apiUrl + 'manage/delivery/logistics-order/driver-refuse', // 司机拒绝
  signLogisticsOrder: apiUrl + 'manage/delivery/logistics-order/sign', // 签收
  unloadingLogisticsOrder: apiUrl + 'manage/delivery/logistics-order/unloading', // 卸车

  /* 设备管理接口 */
  getOnlineEquipList: apiUrl + 'manage/equip/base/OnlineEquip/list', // 获取在线设备列表
  addOnlineEquip: apiUrl + 'manage/equip/base/onlineEquip/add', // 新增上线设备
  modOnlineEquip: apiUrl + 'manage/equip/base/onlineEquip/update', // 修改在线设备
  changeOnlineEquip: apiUrl + 'manage/equip/base/onlineEquip/change', // 更换在线设备
  getAddOnlineEquip: apiUrl + 'manage/equip/base/onlineEquip/add', // 获取在线设备新增前数据

  getBasicEquipList: apiUrl + 'manage/equip/base/basicEquip/list', // 获取设备列表
  addBasicEquip: apiUrl + 'manage/equip/base/basicEquip/add', // 新增基础设备
  deleteBasicEquip: apiUrl + 'manage/equip/base/basicEquip/delete', // 删除基础设备
  modBasicEquip: apiUrl + 'manage/equip/base/basicEquip/update', // 修改基础设备
  getEquipType: apiUrl + 'manage/equip/base/basicEquip/widget', // 获取设备类型列表
  getDiscardDetail: apiUrl + 'manage/equip/base/basicEquip/getDiscardDetailByCode', // 废弃详情

  getEquipInspectList: apiUrl + 'manage/equip/equipInspect/setting/add', // 获取巡检设置和记录新增前数据
  addEquipInspect: apiUrl + 'manage/equip/equipInspect/setting/add', // 新增巡检设置
  getEquipInspect: apiUrl + 'manage/equip/equipInspect/setting/list', // 获取巡检设置列表
  modEquipInspect: apiUrl + 'manage/equip/equipInspect/setting/update', // 修改巡检设置

  getRecordList: apiUrl + 'manage/equip/equipInspect/record/list', // 获取巡检记录列表
  addRecord: apiUrl + 'manage/equip/equipInspect/record/add', // 新增巡检记录
  modRecord: apiUrl + 'manage/equip/equipInspect/record/update', // 修改巡检记录

  getFaultList: apiUrl + 'manage/equip/fault/list', // 故障单列表查看
  addFault: apiUrl + 'manage/equip/fault/add', // 新增故障单
  cancelFault: apiUrl + 'manage/equip/fault/cancel', // 取消故障单
  deleteFault: apiUrl + 'manage/equip/fault/delete', // 删除故障单
  detailFault: apiUrl + 'manage/equip/fault/detail', // 查看详情
  publishFault: apiUrl + 'manage/equip/fault/publish', // 发布故障单

  getLinkMan: apiUrl + 'manage/station/getStationUsers', // 根据站id/角色查询关联的联系人信息
  getCompany: apiUrl + 'manage/widget/getCompanyByStationId', // 根据站点id查询第三方维修公司列表
  getCompanyId: apiUrl + 'manage/widget/getCompanyByUserId', // 根据用户id查询所在公司id

  handleResultInner: apiUrl + 'manage/equip/fault/handleResultInner', // 加气站处理内部维修故障单（气站内部录入处理结果）
  handleResultThird: apiUrl + 'manage/equip/fault/handleResultThird', // 加气站处理第三方维修公司故障单（待确认）

  updateFault: apiUrl + 'manage/equip/fault/vieFault', // 第三方维修公司抢单
  vieFaultList: apiUrl + 'manage/equip/fault/vieFaultList', // 抢单列表页面查询故障单
  handleFault: apiUrl + 'manage/equip/fault/handleFault', // 第三方维修公司处理

  addEquipInspectItem: apiUrl + 'manage/equip/equipInspect/term/add', // 站点巡检项新增
  equipInspectList: apiUrl + 'manage/equip/equipInspect/term/list', // 站点巡检项列表
  delEquipInspectItem: apiUrl + 'manage/equip/equipInspect/term/delete', // 删除站点巡检项条目
  editEquipInspectItem: apiUrl + 'manage/equip/equipInspect/term/update', // 修改站点巡检项条目
  getEquipInspectItem: apiUrl + 'manage/equip/equipInspect/term/item', // 根据站点id获取巡检项
  /* 站点相关 */
  getLeaderList: apiUrl + 'manage/station/leaderList', // 获取站长列表
  getStationList: apiUrl + 'manage/station/list', // 获取站点列表
  getAddStation: apiUrl + 'manage/station/add', // 新增站点前数据（公司）
  addStation: apiUrl + 'manage/station/add', // 新增站点
  updateStation: apiUrl + 'manage/station/update', // 修改站点
  deleteStation: apiUrl + 'manage/station/delete', // 删除站点
  getStationDetail: apiUrl + 'manage/station/getDetail', // 获取站点详情
  addStationUser: apiUrl + 'manage/station/addStationUser', // 新增站点员工前数据
  getStationUsers: apiUrl + 'manage/station/getStationUsers', // 查看站点现有员工
  bundingBox: apiUrl + 'manage/station/bundingBox', // 绑定LngBox
  getStationTotalFlow: apiUrl + 'manage/station/totalFlow', // 得到站点总的剩余量
  getStationReport: apiUrl + 'manage/station/v2/report', // 站点累积流量报表-v2
  getStationListUser: apiUrl + 'manage/station/list-user', // 当前用户所关联站点(视频获取站点)
  getStationVideoUrlList: apiUrl + 'manage/station/video/url/list', // 站点视频流列表
  getStationAddContainer: apiUrl + 'manage/station/container/add', // 站点绑定罐箱前数据
  AddStationContainer: apiUrl + 'manage/station/container/add', // 站点绑定罐箱

  // 站点交易
  getStationTradeList: apiUrl + 'manage/system/station/trade/list', // 站点交易列表
  addTradePrice: apiUrl + 'manage/system/station/trade/price/add', // 站点交易单价新增
  getTradePriceList: apiUrl + 'manage/system/station/trade/price/list', // 站点交易单价列表
  getAddTradePriceList: apiUrl + 'manage/system/station/trade/price/add', // 站点交易单价新增前数据
  getTradeFlowList: apiUrl + 'manage/system/station/trade/flow/list', // 站点交易账单列表
  rechargeTradeFlow: apiUrl + 'manage/system/station/trade/flow/add', // 站点充值
  settingBalanceAlarm: apiUrl + 'manage/system/station/trade/flow/balance', // 余额报警设置
  getRemindUser: apiUrl + 'manage/system/station/trade/flow/balance', // 余额报警通知人员
  getTradeRechargeData: apiUrl + 'manage/system/station/trade/flow/add', // 充值前数据
  getTradeFlowDay: apiUrl + 'manage/system/station/trade/flow/day', // 充值前数据

  getTradeRechargeList: apiUrl + 'manage/system/station/trade/recharge/list', // 充值明细
  getTradeLastMoney: apiUrl + 'manage/system/station/trade/last/money', // 站点最后余额

  getTradeBalanceSum: apiUrl + 'manage/system/station/trade/balance/sum', // 站点余额合计
  getTradeConsumeList: apiUrl + 'manage/system/station/trade/consume/list', // 站点单价消费累计
  getTradeReportList: apiUrl + 'manage/system/station/trade/report/list', // 站点充值、消费金额列表

  // box累积流量流水  流水初始化 修改 相关操作
  getFlowList: apiUrl + 'manage/smartBox/flow/list', // 站点累积流量区列表
  initFlow: apiUrl + 'manage/smartBox/flow/init', // 累积流量初始化

  // 采购订单
  getStationRequireOrderList: apiUrl + 'manage/station/order/require/list', // 站点需求订单列表
  updateOrderRequireList: apiUrl + 'manage/station/order/require/update', // 入库
  getCompanySupply: ssoUrl + 'manage/system/company/supply', // 获取企业关联的供货方

  // 站点入库
  getStationPurchaseBefore: apiUrl + 'manage/station/purchase/add', // 站点入库前数据
  getStationPurchaseList: apiUrl + 'manage/station/purchase/list', // 站点入库列表
  updateStationPurchaseList: apiUrl + 'manage/station/purchase/update', // 入库
  addStationPurchaseRecord: apiUrl + 'manage/station/purchase/add', // 新增一条入库记录
  getStationStatisticsList: apiUrl + 'manage/station/purchase/statistics', // 新增一条入库记录
  deleteStationPurchaseList: apiUrl + 'manage/station/purchase/delete', // 新增一条入库记录
  getStationPurchaseDetail: apiUrl + 'manage/station/purchase/detail', // 新增一条入库记录

  // 站点销售
  getStationReportList: apiUrl + 'manage/station/purchase/report', // 站点需求订单列表

  /* 监控预警 */
  getRealTimeData: apiUrl + 'manage/hbase/getRealTimeData', // 获取实时数据
  getHistoryData: apiUrl + 'manage/hbase/getHistoryData', // 获取历史数据
  getHistoryDataByHourAndDay: apiUrl + 'manage/hbase/history/intergral-point', // 得到历史数据的整点/天数据
  getRealTimeDataByAreaCode: apiUrl + 'manage/hbase/getRealTimeDataByAreaCode', // hbase区域实时数据
  controlIo: apiUrl + 'manage/smartBox/io/control', // IO阀门控制
  getIoList: apiUrl + 'manage/smartBox/io/list', // IO端口列表
  getCarHistoryLocation: apiUrl + 'manage/car/location/history', // 历史轨迹
  getStationContainerRealTimeList: apiUrl + 'manage/hbase/realtime/station/container/list', // 得到hbase中罐箱站下罐箱的实时数据
  getInspectList: apiUrl + 'manage/monitor/inspect/term/list', // 获取巡检项列表
  addInspectItem: apiUrl + 'manage/monitor/inspect/term/add', // 新增巡检项条目
  delInspectItem: apiUrl + 'manage/monitor/inspect/term/delete', // 删除巡检项条目
  editInspectItem: apiUrl + 'manage/monitor/inspect/term/update', // 修改巡检项条目
  getStationInspectItem: apiUrl + 'manage/monitor/inspect/term/item', // 根据站点id获取巡检项
  // 报警信息
  getAlarmInfoList: utilUrl + 'manage/monitor/alarm/getAlarmInfoList', // 获取报警信息列表
  getAlarmDetail: utilUrl + 'manage/monitor/alarm/getAlarmDetail', // 获取报警信息详情
  handleAlarmInfo: utilUrl + 'manage/monitor/alarm/handleAlarmInfo', // 处理报警信息
  getStationsByDistrictCode: apiUrl + 'manage/widget/getStationsByDistrictCode', // 获取站点

  // 常规巡检
  getRoutinePersonList: utilUrl + 'manage/monitor/routine/person/list', // 获取个人巡检列表
  getRoutineStationList: utilUrl + 'manage/monitor/routine/routine/list', // 获取站点巡检列表
  getRoutinePersonDetail: utilUrl + 'manage/monitor/routine/personRoutine/detail', // 获取个人巡检详情
  modifyRoutine: utilUrl + 'manage/monitor/routine/update', // 修改常规巡检
  getStationRoutineDetail: utilUrl + 'manage/monitor/routine/stationRoutine/detail', // 获取站点巡检详情
  addRoutine: utilUrl + 'manage/monitor/routine/add', // 录入常规巡检
  getRoutineProject: utilUrl + 'manage/monitor/routine/routine/item', // 获取常规巡检项目

  // 交接班巡检
  getShiftInfoList: utilUrl + 'manage/monitor/handover/list', // 获取交接班巡检列表
  getShiftDetail: utilUrl + 'manage/monitor/handover/detail', // 获取交接班巡检详情
  addShiftReport: utilUrl + 'manage/monitor/handover/hand/add', // 录入交班报告
  addSuccessionReport: utilUrl + 'manage/monitor/handover/take/add', // 录入接班报告
  modifyShift: utilUrl + 'manage/monitor/handover/update', // 修改交接班
  getUserList: utilUrl + 'manage/monitor/handover/user/list', // 获取交接班巡检人员
  getInspectTeam: utilUrl + 'manage/monitor/routine/all/item', // 得到所有巡检项

  /* LNG BOX管理 */
  getSmartBoxList: apiUrl + 'manage/smartBox/smartBox/list', // 获取box列表
  addLngBox: apiUrl + 'manage/smartBox/smartBox/add', // 新增box信息
  deleteLngBox: apiUrl + 'manage/smartBox/smartBox/delete', // 删除box信息
  updateLngBox: apiUrl + 'manage/smartBox/smartBox/update', // 修改box信息
  getStationUnbound: apiUrl + 'manage/station/unbound/classify', // 某公司下所有未绑定box的站点或车辆
  getBoxStatusList: apiUrl + 'manage/smartBox/smartBox/status/list', // box状态记录
  getSmartBoxDataList: apiUrl + 'manage/smartBox/smartBox/data/list', // 智能box数据列表

  /* LNG BOX参数设置 */
  getBoxParameterList: apiUrl + 'manage/smartBox/boxParameter/list', // box参数列表
  addBoxParameter: apiUrl + 'manage/smartBox/boxParameter/add', // 新增box参数
  deleteBoxParameter: apiUrl + 'manage/smartBox/boxParameter/delete', // 删除box参数
  updateBoxParameter: apiUrl + 'manage/smartBox/boxParameter/update', // 修改box参数
  getAddBoxParameterList: apiUrl + 'manage/smartBox/boxParameter/add', // 获取box新增前数据
  getAddBoxParameterPort: apiUrl + 'manage/smartBox/boxParameter/port/add', // 根据传感器类型查询采集端口
  getBoxParameterSettingList: apiUrl + 'manage/smartBox/boxParameter/boxsetting-list', // box参数列表（不分页）
  updateBoxParameterSort: apiUrl + 'manage/smartBox/boxParameter/sort-update', // box参数排序更新,根据传入list的顺序，按大到小更新sort_num字段

  /* LNGBOX更新 */
  getSmartBoxPush: apiUrl + 'manage/smartBox/version/push', // 下发指定到Kafka
  getUpdateList: apiUrl + 'manage/smartBox/version/list', // 智能box版本更新列表
  boxUpdate: apiUrl + 'manage/smartBox/version/update', // box更新
  stopBoxUpdate: apiUrl + 'manage/smartBox/version/stop', // box更新
  boxConnect: smesUrl + 'sse/boxConnect', // 更新推送通道连接
  connect: smesUrl + 'sse/connect', // 推送通道连接
  openSseType: smesUrl + 'sse/open-type', // 通过类型开启数据推送
  closeSseType: smesUrl + 'sse/close-type', // 通过类型关闭数据推送
  closeConnect: smesUrl + 'sse/close', // 通过类型关闭数据推送

  /* 触发器 */
  getTriggerList: apiUrl + 'manage/smartBox/trigger/list', // 获取触发器list
  getAddTriggerList: apiUrl + 'manage/smartBox/trigger/add', // 获取触发器新增前数据
  addTrigger: apiUrl + 'manage/smartBox/trigger/add', // 新增触发器
  deleteTrigger: apiUrl + 'manage/smartBox/trigger/delete', // 删除触发器
  updateTrigger: apiUrl + 'manage/smartBox/trigger/update', // 修改触发器
  getAddTriggerSensor: apiUrl + 'manage/smartBox/trigger/sensor/add', // 根据boxId和区域id获取传感器
  getAddTriggerArea: apiUrl + 'manage/smartBox/trigger/area/add', // 根据boxId获取区域
  getBoxByTriggerType: apiUrl + 'manage/smartBox/trigger/type/list', // 根据类别查询触发器列表
  getBoxUserByType: apiUrl + 'manage/widget/getBoxUserByType', // 根据BOX类型获取BOX用户
  getUpdateTriggerList: apiUrl + 'manage/smartBox/trigger/update', // 根据BOX类型获取BOX用户

  // box充值
  cancelPayOrder: apiUrl + 'manage/smartBox/pay/cancel-order', // 取消订单
  initiatePay: apiUrl + 'manage/smartBox/pay/initiate', // box支付
  getUserPayList: apiUrl + 'manage/smartBox/pay/user-list', // 用户充值记录查询
  getBoxPayList: apiUrl + 'manage/smartBox/pay/box-list', // box充值记录查询
  getPayList: apiUrl + 'manage/smartBox/pay/list', // box支付列表

  /* 下拉 */
  getSelectStation: apiUrl + 'manage/widget/select/station', // 获取站点查询
  getStationsByCompanyId: apiUrl + 'manage/widget/getStationsByCompanyId', // 根据公司id得到站点列表
  getStationsByCityCode: apiUrl + 'manage/widget/getStationsByLocation', // 根据省市区得到站点列表
  getCompanyUserByCompanyId: apiUrl + 'manage/widget/getCompanyUserByCompanyId', // 根据公司ID获取该公司下的员工信息
  getStationsByUserId: apiUrl + 'manage/widget/getStationsByUserId', // 根据当前用户获取站点
  getCompanyByUserId: apiUrl + 'manage/widget/v2/getCompanyByUserId', // 根据当前用户获取公司
  getDetailStationsByCompanyId: apiUrl + 'manage/widget/getDetailStationsByCompanyId', // 根据公司id得到站点详细列表

  /* 统计分析 */
  getAlarmCount: apiUrl + 'manage/statistics/getAlarmCount', // 气站预警统计
  getAnalysisByProvinceCode: apiUrl + 'manage/statistics/getAnalysisByProvinceCode', // 省份消耗分析
  getBeReplacedEquip: apiUrl + 'manage/statistics/getBeReplacedEquip', // 待更换设备统计
  getConsumeByLocation: apiUrl + 'manage/statistics/getConsumeByLocation', // 气站消耗统计(按照地区分组)
  getConsumeByTime: apiUrl + 'manage/statistics/getConsumeByTime', // 气站消耗统计(按照时间分组)
  getStationCountByLocation: apiUrl + 'manage/statistics/getStationCountByLocation', // 站点分布
  getStationReserves: apiUrl + 'manage/statistics/getStationReserves', // 气站储量统计

  /* 我的LNG */
  getUpdateMyLngUser: ssoUrl + 'manage/system/user/update', // 修改用户前数据
  updateMyLngUser: ssoUrl + 'manage/system/user/update/updateUserInfo', // 用户更新
  updateMyLngPassword: ssoUrl + 'manage/system/user/update/password', // 修改密码
  setMyLngMessage: apiUrl + 'manage/mylng/user/setMessage', // 消息设置

  // 消息提醒
  getMessageSettingList: apiUrl + 'manage/mylng/messageSetting/list', // 消息设置列表查看
  getMyLngMessageList: apiUrl + 'manage/mylng/message/list', // 消息列表
  deleteMyLngMessage: apiUrl + 'manage/mylng/message/delete', // 删除消息
  updateMyLngMessage: apiUrl + 'manage/mylng/message/update', // 更新消息状态为已读
  getNotReadCount: apiUrl + 'manage/mylng/message/getNotReadCount', // 得到未读消息个数
  readAll: apiUrl + 'manage/mylng/read', // 更新消息状态为已读
  deleteAllMessage: apiUrl + 'manage/mylng/message/delete/all', // 全部删除

  /* 首页 */
  getShowIndexInfo: apiUrl + 'manage/index/showIndexInfo', // 获取首页内容

  /* 地图信息 */
  getMapInfo: apiUrl + 'manage/amap/base/info', // 获取首页内容
  getMapDetail: apiUrl + 'manage/amap/detail', // 获取首页内容
  getMapOutline: apiUrl + 'manage/amap/station/outline', // 获取首页内容
  getMapCoverage: apiUrl + 'manage/amap/coverage', // 获取首页内容

  /* 微信 */
  wxGetToken: wxUrl + '/user/info',
  wxReg: wxUrl + '/user/reg',
  wxJssdk: wxUrl + '/jssdk',

  /* 储罐信息 */
  getTankList: apiUrl + 'manage/dictionary/tank/list', // 获取储罐信息
  addTank: apiUrl + 'manage/dictionary/tank/add', // 新增储罐信息
  updateTank: apiUrl + 'manage/dictionary/tank/update', // 修改储罐信息
  deleteTank: apiUrl + 'manage/dictionary/tank/delete', // 删除储罐信息

  // 容积表
  getTankCapacityList: apiUrl + 'manage/dictionary/tank/param/list', // 获取油罐参数列表
  saveTankCapacity: apiUrl + 'manage/dictionary/tank/param/save', // 新增储罐信息
  deteleTankCapacity: apiUrl + 'manage/dictionary/tank/param/delete', // 修改储罐信息

  /* 传感器信息 */
  getSensorList: apiUrl + 'manage/dictionary/sensor/list', // 获取传感器信息
  addSensor: apiUrl + 'manage/dictionary/sensor/add', // 新增传感器信息
  updateSensor: apiUrl + 'manage/dictionary/sensor/update', // 修改传感器信息
  deleteSensor: apiUrl + 'manage/dictionary/sensor/delete', // 删除传感器信息
  getAddSensor: apiUrl + 'manage/dictionary/sensor/add', // 传感器新增前数据

  /* 区域信息 */
  getAreaList: apiUrl + 'manage/dictionary/area/list', // 获取区域信息
  addArea: apiUrl + 'manage/dictionary/area/add', // 新增区域信息
  updateArea: apiUrl + 'manage/dictionary/area/update', // 修改区域信息
  deleteArea: apiUrl + 'manage/dictionary/area/delete', // 删除区域信息
  getAddArea: apiUrl + 'manage/dictionary/area/add', // 区域新增前数据

  /* 单位信息 */
  getUnitList: apiUrl + 'manage/dictionary/unit/list', // 获取单位信息
  addUnit: apiUrl + 'manage/dictionary/unit/add', // 新增单位信息
  updateUnit: apiUrl + 'manage/dictionary/unit/update', // 修改单位信息
  deleteUnit: apiUrl + 'manage/dictionary/unit/delete', // 删除单位信息

  /* 图标信息 */
  getDictIconList: apiUrl + 'manage/dictionary/dictIcon/list', // 获取图标信息
  addDictIcon: apiUrl + 'manage/dictionary/dictIcon/add', // 新增图标信息
  updateDictIcon: apiUrl + 'manage/dictionary/dictIcon/update', // 修改图标信息
  deleteDictIcon: apiUrl + 'manage/dictionary/dictIcon/delete', // 删除图标信息

  /* 源数据字典 */
  getSourceDataTypeList: apiUrl + 'manage/dictionary/sourceData/type/list', // 数据字段类型列表
  getSourceDataList: apiUrl + 'manage/dictionary/sourceData/data/list', // 源数据列表
  addSourceDataTypeList: apiUrl + 'manage/dictionary/sourceData/type/add', // 新增源数据类型
  updateSourceDataTypeList: apiUrl + 'manage/dictionary/sourceData/type/update', // 修改源数据类型
  deleteSourceDataList: apiUrl + 'manage/dictionary/sourceData/type/delete', // 删除源数据
  updateSourceDataList: apiUrl + 'manage/dictionary/sourceData/data/update', // 更新源数据
  addSourceDataList: apiUrl + 'manage/dictionary/sourceData/data/add', // 新增源数据信息
  deleteSourceInfoList: apiUrl + 'manage/dictionary/sourceData/data/delete', // 删除源数据信息
  sourceDataTypeAddList: apiUrl + 'manage/dictionary/sourceData/type/add', // 数据字段类型新增前数据
  sourceDataTypeModList: apiUrl + 'manage/dictionary/sourceData/type/update', // 数据字段类型修改前数据

  /* 消防应急机构 */
  getFireList: apiUrl + 'manage/emergency/fire/list', // 获取消防应急机构列表
  addFire: apiUrl + 'manage/emergency/fire/add', // 新增消防应急机构
  deleteFire: apiUrl + 'manage/emergency/fire/delete', // 删除消防应急机构
  updateFire: apiUrl + 'manage/emergency/fire/update', // 修改消防应急机构

  /* 医疗应急机构 */
  getHospitalList: apiUrl + 'manage/emergency/hospital/list', // 获取医疗应急机构列表
  addHospital: apiUrl + 'manage/emergency/hospital/add', // 新增医疗应急机构
  deleteHospital: apiUrl + 'manage/emergency/hospital/delete', // 删除医疗应急机构
  updateHospital: apiUrl + 'manage/emergency/hospital/update', // 修改医疗应急机构

  /* 应急预案管理 */
  getArrplanList: apiUrl + 'manage/emergency/arrplan/list', // 获取应急预案管理列表
  addArrplan: apiUrl + 'manage/emergency/arrplan/add', // 新增应急预案管理
  deleteArrplan: apiUrl + 'manage/emergency/arrplan/delete', // 删除应急预案管理
  updateArrplan: apiUrl + 'manage/emergency/arrplan/update', // 修改应急预案管理

  /* 应急物资管理 */
  getEmergsupList: apiUrl + 'manage/emergency/emergsup/list', // 获取应急物资管理列表
  addEmergsup: apiUrl + 'manage/emergency/emergsup/add', // 新增应急物资管理
  deleteEmergsup: apiUrl + 'manage/emergency/emergsup/delete', // 删除应急物资管理
  updateEmergsup: apiUrl + 'manage/emergency/emergsup/update', // 修改应急物资管理
  getAddEmergsupList: apiUrl + 'manage/emergency/emergsup/add', // 获取物资新增前数据

  /* 应急值守管理 */
  getEmergencyDutyList: apiUrl + 'manage/emergency/duty/list', // 获取值班列表
  getEmergencyUserList: apiUrl + 'manage/emergency/duty/user/list', // 获取值班列表
  addEmergencyUserList: apiUrl + 'manage/emergency/duty/add', // 新增值班列表
  updateEmergencyUserList: apiUrl + 'manage/emergency/duty/update', // 修改值班列表

  /* 应急避难地管理 */
  getHavenList: apiUrl + 'manage/emergency/haven/list', // 获取应急避难地管理列表
  addHaven: apiUrl + 'manage/emergency/haven/add', // 新增应急避难地管理
  deleteHaven: apiUrl + 'manage/emergency/haven/delete', // 删除应急避难地管理
  updateHaven: apiUrl + 'manage/emergency/haven/update', // 修改应急避难地管理

  /* 危险评估报告 */
  getEmergencyReportList: apiUrl + 'manage/emergency/report/list', // 危险评估报告列表
  addEmergencyReportList: apiUrl + 'manage/emergency/report/add', // 新增危险评估报告列表
  delEmergencyReportList: apiUrl + 'manage/emergency/report/delete', // 删除危险评估报告列表
  updateEmergencyReportList: apiUrl + 'manage/emergency/report/update', // 修改危险评估报告列表

  /* 风险扩散 */
  getEmergencyInjureArea: apiUrl + 'manage/emergency/injure/area', // 危险评估报告列表

  /* 车辆管理 */
  getCarManagementList: apiUrl + 'manage/delivery/Carmanagement/list', // 获取槽车管理列表
  addCarManagement: apiUrl + 'manage/delivery/Carmanagement/add', // 新增槽车管理
  deleteCarManagement: apiUrl + 'manage/delivery/Carmanagement/delete', // 删除槽车管理
  updateCarManagement: apiUrl + 'manage/delivery/Carmanagement/update', // 修改槽车管理
  getAddStationCarManagement: apiUrl + 'manage/delivery/Carmanagement/add/widget', // 获取槽车新增前数据
  getUpdataCarStaffing: apiUrl + 'manage/delivery/Carmanagement/staffing/update', // 槽车人员配置前数据
  updataCarStaffing: apiUrl + 'manage/delivery/Carmanagement/staffing/update', // 槽车人员配置
  getUpdataCarTask: apiUrl + 'manage/delivery/Carmanagement/task/update', // 槽车任务安排前数据
  updataCarTask: apiUrl + 'manage/delivery/Carmanagement/task/update', // 槽车任务安排
  getCarManagementDetail: apiUrl + 'manage/delivery/Carmanagement/detail', // 槽车管理详情

  /* 液价计算 */
  getFactoryList: apiUrl + 'manage/liquid/factory/list', // 获取液厂列表
  addFactoryList: apiUrl + 'manage/liquid/factory/add', // 新增液厂信息
  deleteFactoryList: apiUrl + 'manage/liquid/factory/delete', // 删除液厂信息
  updateFactoryList: apiUrl + 'manage/liquid/factory/update', // 修改液厂信息

  /* 里程计算 */
  factoryDistanceList: apiUrl + 'manage/liquid/factory/distance/list', // 里程列表
  /* addFactoryDistance: apiUrl + 'manage/liquid/factory/distance/add',//新增里程 */
  addOneFactoryDistance: apiUrl + 'manage/liquid/factory/distance/add/one', // 新增单个里程
  updateFactoryDistance: apiUrl + 'manage/liquid/factory/distance/update', // 修改里程
  deleteFactoryDistance: apiUrl + 'manage/liquid/factory/distance/delete', // 删除里程
  addAllFactoryDistance: apiUrl + 'manage/liquid/factory/distance/add/all', // 批量增加里程信息

  /* 运费标准 */
  carriagePriceList: apiUrl + 'manage/liquid/factory/price/carriage/list', // 运费标准列表
  addCarriagePrice: apiUrl + 'manage/liquid/factory/price/carriage/add', // 新增运费标准
  deleteCarriagePrice: apiUrl + 'manage/liquid/factory/price/carriage/delete', // 删除运费标准
  updateCarriagePrice: apiUrl + 'manage/liquid/factory/price/carriage/update', // 修改运费标准

  /* 液厂价格 */
  factoryHistoryPriceList: apiUrl + 'manage/liquid/factory/price/history/list', // 液厂价格列表
  factoryBuyPriceList: apiUrl + 'manage/liquid/factory/price/buy/list', // 液厂出厂价格列表
  updateFactoryBuyPriceList: apiUrl + 'manage/liquid/factory/price/buy/update', // 修改出厂价格
  addFactoryTomorrowPrice: apiUrl + 'manage/liquid/factory/price/buy/tomorrow/add', // 生成明日价格

  /* 堆场管理 */
  addStockDump: apiUrl + 'manage/stock-dump/add', // 创建堆场
  deleteStockDump: apiUrl + 'manage/stock-dump/delete', // 删除堆场
  getStockDump: apiUrl + 'manage/stock-dump/list-companyid', // 根据公司id得到堆场列表

  getYardList: apiUrl + 'manage/yard/list', // 获取堆场列表
  addYard: apiUrl + 'manage/yard/add', // 创建堆场
  updateYard: apiUrl + 'manage/yard/update', // 修改堆场
  getYardDetail: apiUrl + 'manage/yard/detail', // 查看堆场详情
  deleteYard: apiUrl + 'manage/yard/delete', // 删除堆场

  getYardRecordList: apiUrl + 'manage/yard/record/list', // 获取堆场进出记录列表
  getYardContainerList: apiUrl + 'manage/yard/record/container/list', // 获取堆场罐箱列表
  getYardStatisticsList: apiUrl + 'manage/yard/record/statistics/list', // 获取堆场进出记录统计

  /* 微信公众号消息提醒 */
  getWxDetail: ssoUrl + 'manage/system/wxplatform/detail', // 查询微信公众号消息接收
  updateWxDetail: ssoUrl + 'manage/system/wxplatform/update'// 修改微信公众号消息接收

}

export default path
