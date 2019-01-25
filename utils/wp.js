import callBackTemplate from './callBackTemplate'

class Wp {
    /**
     * 同 wx.canIUse
     * 判断API是否可用
     * @param {String} apiName
     * @returns {Boolean}
     */
    canIUse (apiName) {
        return wx.canIUse(apiName)
    }
    
    /**
     * 同wx.getSystemInfoSync
     * 获取系统信息
     * @returns {*} res
     */
    getSystemInfoSync () {
        return wx.getSystemInfoSync()
    }

    /**
     * 同wx.getSystemInfo(Object object)
     * 获取系统信息
     */
    getSystemInfo () {
        let o = new callBackTemplate()
        setTimeout(() => {
            wx.getSystemInfo({
                ...o.getCallbackObj()
            })
        }, 0)

        return o
    }

    /**
     * 同 wx.getLaunchOptionsSync()
     * 获取小程序启动时的参数。与 App.onLaunch 的回调参数一致。
     */
    getLaunchOptionsSync () {
        return wx.getLaunchOptionsSync()
    }

    /**
     * wx.switchTab 升级版
     * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
     * @param {String} url 要跳转的路径
     */
    switchTab (url) {
        let t
        let o = new callBackTemplate()
        t = setTimeout(() => {
            wx.switchTab({
                url,
                ...o.getCallbackObj(t)
            })
        }, 0)
        return o
    }

    /**
     * wx.reLaunch 升级版
     * 关闭所有页面，打开到应用内的某个页面
     * @param {String} url 要跳转的路径
     */
    reLaunch (url) {
        let t
        let o = new callBackTemplate()
        t = setTimeout(() => {
            wx.reLaunch({
                url,
                ...o.getCallbackObj(t)
            })
        }, 0)
        return o
    }

    /**
     * wx.redirectTo 升级版
     * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
     * @param {String} url 要跳转的路径
     */
    redirectTo (url) {
        let o = new callBackTemplate()
        let t
        t = setTimeout(() => {
            wx.redirectTo({
                url,
                ...o.getCallbackObj(t)
            })
        }, 0)
        return o
    }

    /**
     * wx.navigateTo 升级版
     * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
     * @param {String} url 要跳转的路径
     */
    navigateTo (url) {
        let t
        let o = new callBackTemplate()
        t = setTimeout(() => {
            wx.navigateTo({
                url,
                ...o.getCallbackObj(t)
            })
        }, 0)
        return o
    }

    /**
     * wx.navigateBack 升级版
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
     * @param {String} url 要跳转的路径
     */
    navigateBack (delta) {
        let t
        let o = new callBackTemplate()
        t = setTimeout(() => {
            wx.navigateBack({
                delta,
                ...o.getCallbackObj(t)
            })
        }, 0)
        return o
    }

    /**
     * wx.showToast 升级版
     * 显示消息提示框
     * @param {*} data 消息提示框参数
     * @param {String} data.title 提示的内容
     * @param {String} data.icon 图标
     * @param {String} data.image 自定义图标的本地路径，image 的优先级高于 icon
     * @param {Number} data.duration 提示的延迟时间
     * @param {Boolean} data.mask 是否显示透明蒙层，防止触摸穿透
     */
    showToast (data) {
        let t
        let o = new callBackTemplate()
        t = setTimeout(() => {
            wx.showToast(Object.assign(data, o.getCallbackObj()))
        }, 0)
        return o
    }

    /**
     * wx.showModal 升级版
     * 显示模态对话框
     * @param {*} data 显示模态对话框参数
     * @param {String} data.title 提示的标题
     * @param {String} data.content 提示的内容
     * @param {Boolean} data.showCancel 是否显示取消按钮
     * @param {String} data.cancelText 取消按钮的文字，最多 4 个字符
     * @param {String} data.cancelColor 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
     * @param {String} data.confirmText 确认按钮的文字，最多 4 个字符
     * @param {String} data.confirmColor 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
     */
    showModal (data) {
        let t
        let o = new callBackTemplate()
        t = setTimeout(() => {
            wx.showModal(Object.assign(data, o.getCallbackObj()))
        }, 0)
        return o
    }
}

export default new Wp()