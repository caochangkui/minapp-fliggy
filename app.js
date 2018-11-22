//app.js
App({
    onLaunch: function (options) {
        // 小程序初始化完成时（全局只触发一次）
        let _this = this;
        wx.showModal({
            title: '请求授权',
            content: '是否授权用户信息？',
            success(res) {
                if (res.confirm) {
                    wx.getUserInfo({
                        success: (res) => {
                            console.log(res);
                            _this.globalData.userInfo = res.userInfo;
                        }
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        })
    },
    onShow: function (options) {
        // 小程序启动，或从后台进入前台显示时
    },
    onHide: function () {
        // 小程序从前台进入后台时
    },
    onError: function (msg) {
        // 小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息
        console.log(msg)
    },
    globalData: {
        userInfo: null
    }
})