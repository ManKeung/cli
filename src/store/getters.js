const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  role: state => state.user.role,
  permissions: state => state.user.permissions,
  msgNum: state => state.user.msgNum,
  topNav: state => state.user.topNav,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  systemType: state => state.permission.systemType
}

export default getters
