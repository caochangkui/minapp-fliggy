// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        animationData: {}
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
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
            transformOrigin: 'left top 0',
            success: function (res) {
                console.log(res)
            }
        })

        this.animation = animation

        // animation.scale(2, 2).rotate(45).step()

        // this.setData({
        //     animationData: animation.export()
        // })

        // setTimeout(function () {
        //     animation.translate(30).step()
        //     this.setData({
        //         animationData: animation.export()
        //     })
        // }.bind(this), 3000)
    },
    rotateAndScale: function () {
        // 旋转同时放大
        this.animation.rotate(45).scale(2, 2).step()
        this.setData({
            animationData: this.animation.export()
        })
    },
    rotateThenScale: function () {
        // 先旋转后放大
        this.animation.rotate(85).step()
        this.animation.scale(4, 2).step()
        this.setData({
            animationData: this.animation.export()
        })
    },
    rotateAndScaleThenTranslate: function () {
        // 先旋转同时放大，然后平移
        this.animation.rotate(45).scale(2, 2).step()
        this.animation.translate(100, 100).step({ duration: 1000 })
        this.setData({
            animationData: this.animation.export()
        })
    }
})