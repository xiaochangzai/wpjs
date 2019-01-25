## 针对小程序API封装的Promise库
#### wp.canIUse
```
wp.canIUse('openBluetoothAdapter')
wp.canIUse('getSystemInfoSync.return.screenWidth')
wp.canIUse('getSystemInfo.success.screenWidth')
wp.canIUse('showToast.object.image')
wp.canIUse('onCompassChange.callback.direction')
wp.canIUse('request.object.method.GET')

wp.canIUse('live-player')
wp.canIUse('text.selectable')
wp.canIUse('button.open-type.contact')
```
#### getSystemInfoSyncTest
同 `wx.getSystemInfoSync`，[返回值查看](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html)

用法：
```
let info =  wp.getSystemInfoSync()
console.log(info)
```
#### wp.getSystemInfo
获取系统信息, `wx.getSystemInfo`的升级版，将传统的回调函数改成链式调用的方式
```
wp.getSystemInfo()
    .success(res => {
        console.log('获取信息成功')
        console.log(res)
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
    }).complete(res => {
        console.log('获取信息完毕')
        console.log(res)
    }).fail(err => {
        console.error('获取信息出错')
        console.error(err)
    })
```

`res` [的参数详情请点击这里](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfo.html)

#### wp.getLaunchOptionsSync
同 `wx.getLaunchOptionsSync` 返回值请参考 [wx.getLaunchOptionsSync](https://developers.weixin.qq.com/miniprogram/dev/api/wx.getLaunchOptionsSync.html)

---
## 路由
#### wp.switchTab
 `wx.switchTab`升级版，同样采用链式操作调用回调函数。用法：
```
wp.switchTab('/pages/index/index')
    .success(res => {
        console.log('跳转成功！')
    }).complete(res => {
        console.log('跳转完成！')
    }).fail(err => {
        console.log('跳转失败！')
    })
```
#### wp.reLaunch
 `wx.reLaunch`升级版，同样采用链式操作调用回调函数。用法：
```
wp.reLaunch('/pages/index/index')
    .success(res => {
        console.log('跳转成功！')
    }).complete(res => {
        console.log('跳转完成！')
    }).fail(err => {
        console.log('跳转失败！')
    })
```
#### wp.redirectTo
 `wx.redirectTo` 升级版，同样采用链式操作调用回调函数。用法：
```
wp.redirectTo('/pages/index/index')
    .success(res => {
        console.log('跳转成功！')
    }).complete(res => {
        console.log('跳转完成！')
    }).fail(err => {
        console.log('跳转失败！')
    })
```
#### wp.navigateBack
 `wx.navigateBack` 升级版，同样采用链式操作调用回调函数。用法：
```
wp.navigateBack(1)
    .success(res => {
        console.log('跳转成功！')
    }).complete(res => {
        console.log('跳转完成！')
    }).fail(err => {
        console.log('跳转失败！')
    })
```
## 界面
#### wp.showToast
 `wx.showToast` 升级版，同样采用链式操作调用回调函数。用法：
```
wp.showToast({
    title: '标题'
}).success((res) => {
    console.log('提示成功！')
}).complete(() => {
    console.log('提示完成')
})
```
#### wp.showModal
 `wx.showModal` 升级版，同样采用链式操作调用回调函数。用法：
```
wp.showModal({
    title: '标题',
    content: '提示内容',
}).success((res) => {
    console.log('显示模态框')
}).complete(() => {
    console.log('操作完成')
})
```