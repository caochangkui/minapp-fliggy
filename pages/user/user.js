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
        wx.getUserInfo({
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo
                });
            }
        })
    }, 
    getUser(e) {
        console.log(e)
        wx.getUserInfo({
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