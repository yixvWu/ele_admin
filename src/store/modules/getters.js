//集中暴露vuex 各个模块想要暴露的属性和方法
export default {
  token: (state) => state.user.token
}
