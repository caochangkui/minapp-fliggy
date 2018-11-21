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
        wx.showModal({
            title: '请求授权',
            content: '是否授权用户信息？',
            success(res) {
                if (res.confirm) {
                    wx.getUserInfo({
                        success: (res) => {
                            console.log(res)
                        }
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
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