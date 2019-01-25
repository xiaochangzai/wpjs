//app.js
import testAll from './test'
App({
  onLaunch: function () {
    // 展示本地存储能力
    testAll()
  },
  globalData: {
    userInfo: null
  }
})