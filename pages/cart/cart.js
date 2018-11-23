// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  onLoad: function (options) {
    // 监听页面加载
    // 页面加载的时候执行，只执行一次
    // 页面之间的相互切换，不会让页面重新加载，也就不会卸载，只会隐藏于显示页面
    
    console.log('页面load');
  },

  
  onReady: function () {
    // 监听页面第一次渲染完成
    // 只执行一次

    console.log('页面ready');
  },

  onShow: function () {
    // 只要页面显示，就会执行
     
    console.log('页面show');
  },


  onHide: function () {
    // 页面隐藏，就会执行
     
    console.log('页面hide');
  },


  onUnload: function () {
    // 页面卸载，就会执行
     
    console.log('页面unload');
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