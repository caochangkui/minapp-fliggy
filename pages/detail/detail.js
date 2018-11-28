// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: {},
        loading: true,
        buyNum: 1,
        showModalStatus: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadDetail(options.id);
        console.log(options.id)
    },

    loadDetail (id) {
        wx.showLoading({
            title: '详情加载中...',
        })

        wx.request({
            url: 'http://10.0.1.109:3000/list',
            success: (res) => {
                console.log(res.data.cityList);
                let thisPlace = res.data.cityList.filter((val) => val.id == id)
                console.log(thisPlace)
                this.setData({ 
                    detail: thisPlace[0],
                    loading: false
                });
                console.log(this.data.detail)
                wx.hideLoading();
            }
        })
    },

    plus () {
        let num = this.data.buyNum;
        num++;
        this.setData({
            buyNum: num
        })
    },

    delete () {
        let num = this.data.buyNum;
        if(num > 1) {
            num--;
        } 
        this.setData({
            buyNum: num
        })
    },
    showBuyModal () {
        // 显示遮罩层
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease",
            delay: 0
        })
        this.animation = animation
        animation.translateY(300).step()
        this.setData({
            animationData: animation.export(), // export 方法每次调用后会清掉之前的动画操作。
            showModalStatus: true
        })
        setTimeout(() => {
            animation.translateY(0).step()
            this.setData({
                animationData: animation.export()
            })
            console.log(this)
        }, 200)
    },
    hideBuyModal () {
        // 隐藏遮罩层
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "ease",
            delay: 0
        })
        this.animation = animation
        animation.translateY(300).step()
        this.setData({
            animationData: animation.export(),
        })
        setTimeout(function () {
            animation.translateY(0).step()
            this.setData({
                animationData: animation.export(),
                showModalStatus: false
            })
            console.log(this)
        }.bind(this), 200)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})