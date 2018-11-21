// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: {},
        loading: true
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