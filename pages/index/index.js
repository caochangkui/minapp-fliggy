// pages/index/index.js
Page({ 
    data: {
        imgUrls: [
            'https://gw.alicdn.com/tfs/TB1ixgdqAvoK1RjSZFDXXXY3pXa-1125-352.jpg_790x10000Q75.jpg_.webp',
            'https://gw.alicdn.com/tfs/TB1ZxhppxTpK1RjSZFMXXbG_VXa-1125-352.jpg_790x10000Q75.jpg_.webp',
            'https://gw.alicdn.com/imgextra/i4/O1CN01bZ2iEJ1Tlm8ymyVrr_!!0-travel.jpg_790x10000Q75.jpg_.webp'
        ],
        indicatorDots: true,
        autoplay: true,
        indicatorColor: '#fedb00',
        interval: 2000,
        duration: 400,
        activeCategoryId: 1,
        category: [
            {
                img: "https://gw.alicdn.com/tfs/TB1DoXFwHsrBKNjSZFpXXcXhFXa-210-126.png_110x10000.jpg_.webp",
                title: '机票'
            },
            {
                img: "https://gw.alicdn.com/tfs/TB1VrdkwOMnBKNjSZFzXXc_qVXa-210-126.png_110x10000.jpg_.webp",
                title: '酒店'
            },
            {
                img: "https://gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp",
                title: '火车票'
            },
            {
                img: "https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp",
                title: '汽车票'
            },
            {
                img: "https://gw.alicdn.com/tfs/TB1aJ4MwHArBKNjSZFLXXc_dVXa-210-126.png_110x10000.jpg_.webp",
                title: '门票'
            }
        ],
        scroll: [
            {
                id: 1,
                img: "https://img.alicdn.com/tfs/TB1Xk9wRFXXXXXGapXXXXXXXXXX-750-750.png_200x200q80.jpg",
                title: '上海'
            },
            {
                id: 2,
                img: "https://gw.alicdn.com/imgextra/i2/2882533541/TB2IsADrcUrBKNjSZPxXXX00pXa_!!2882533541-0-wefliggy.jpg_110x10000Q75.jpg_.webp",
                title: '成都'
            },
            {
                id: 3,
                img: "https://gw.alicdn.com/imgextra/i4/669272/TB2ZzvXrVXXXXadXXXXXXXXXXXX_!!0-travel.jpg_110x10000Q75.jpg_.webp",
                title: '香港'
            },
            {
                id: 4,
                img: "https://gw.alicdn.com/imgextra/i1/669272/TB2mR7YspXXXXcJXpXXXXXXXXXX_!!0-travel.jpg_110x10000Q75.jpg_.webp",
                title: '曼谷'
            },
            {
                id: 5,
                img: "https://gw.alicdn.com/tfs/TB17l52RFXXXXchXpXXXXXXXXXX-750-750.png_110x10000.jpg_.webp",
                title: '丽江'
            }
        ],
        list: [],
        loading: false // 是否正在加载
    }, 
    onLoad: function () {
        this.loadList();
        console.log('从app.js拿到全局变量：', getApp().globalData); 
    },

    // 点击当季旅游地
    tabClick (e) {
        console.log(e);
        this.setData({
            activeCategoryId: e.currentTarget.id
        })
    },

    // 上拉加载
    lower () {
        console.log('lower');
        if (!this.data.loading) {
            this.loadList();
        }
        console.log('从app.js拿到全局变量：', getApp().globalData); 
    },

    // 进入详情页
    goDetail (e) {
        console.log(e.currentTarget.dataset.id),
        wx.navigateTo({
            url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
        })
    },
    
    goUser () { 
        // 注意： 这里跳转的user是一个tabBar页面，redirectTo 只能打开非 tabBar 页面 ，所以需要使用wx.switchTab
        wx.switchTab({
            url: `/pages/user/user`,
        })
    },

    // 获取列表数据
    loadList () {
        let { list } = this.data;
        wx.showLoading({
            title: '正在加载...',
            mask: true
        });
        this.setData({
            loading: true
        });
        wx.request({
            url: 'http://10.0.1.109:3000/list',
            success: (res) => {
                console.log(res.data); 
                list.push(...res.data.cityList);
                console.log(list)
                this.setData({
                    list,
                    loading: false
                });
                wx.hideLoading();
            }
        })
    }
})