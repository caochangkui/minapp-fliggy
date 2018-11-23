// pages/user/user.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('从app.js拿到全局变量：', getApp().globalData); 
    }, 
    
    getUser(e) {
        console.log('=========')
        console.log(e)
        wx.getUserInfo({
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo
                });
            }
        })
        
    },

    onAuthLocation() {
        wx.authorize({
            scope: 'scope.userLocation',
            success: (res) => {
                console.log('成功：' , res)
            },
            fail: (res) => {
                console.log('失败：', res)
            },
        })
    },

    onGetLocation() {
        wx.getLocation({ 
            success: (res) => {
                console.log('成功：', res)
            },
            fail: (res) => {
                console.log('失败：', res)
            },
        })
    },

    gotoSetting() {
        wx.openSetting({
            success: (res) => {
                console.log(res)
            }
        })
    },

    // 存储信息到storage 
    set() {
        wx.setStorage({
            key: 'user',
            data: 'cck',
        })
    },

    // 从storage 中提取信息
    get() {
        wx.getStorage({
            key: 'user',
            success: function (res) {
                console.log(res);
            },
        })
    } 
})