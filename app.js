//app.js
App({
    onLaunch: function (options) {
        // 小程序初始化完成时（全局只触发一次） 
        // 程序销毁（过一段时间没有执行，或者手动删除了小程序后再次添加）之后，再次启动就会执行

        console.log('onLaunch');

        // 地理位置授权
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
        // wx.getSetting({
        //     success(res) {
        //         console.log(res)
        //         if (!res.authSetting['scope.userLocation']) {
        //             wx.authorize({
        //                 scope: 'scope.userLocation',
        //                 success() {
        //                     // 用户已经同意小程序使用录音功能，后续调用 wx.getUserInfo 接口不会弹窗询问
        //                     wx.getLocation()
        //                 }
        //             })
        //         }
        //     }
        // })


        let _this = this;
        
        // 查看是否授权 userInfo , 如果已经授权，才能执行 wx.getUserInfo
        wx.getSetting({
            success(res) {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: (res) => {
                            console.log(res);
                            _this.globalData.userInfo = res.userInfo;
                            console.log('全局授权：', _this.globalData)
                        }
                    }) 
                }
            }
        })
 
    },
    onShow: function (options) {
        // 小程序启动，或从后台进入前台显示时
        console.log('onShow');
    },
    onHide: function () {
        // 小程序从前台进入后台时,就会执行
        console.log('onHide');
    },
    onError: function (msg) {
        // 小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息
        console.log(msg)
    },
    globalData: {
        userInfo: null
    }
})