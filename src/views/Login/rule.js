export const passwordValidate = () => {
  return (rule, value, callback) => {
    // 获取到输入的值做验证 至少是6位
    if (value.length < 6) {
      callback(new Error('密码知道是6位'))
    } else {
      callback()
    }
  }
}
