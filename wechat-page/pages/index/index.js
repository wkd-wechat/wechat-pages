// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },
  data: {
    inputShowed: false,
    inputVal: "",
    background: ['../img/lun1.jpeg', '../img/lun2.jpeg', '../img/lun3.jpeg','../img/lun4.jpeg'],

  cars:[
    {name:'红旗',price:100000,url:'../img/hongqi.jpeg'},
    { name: '红旗H5', price: 200000, url: '../img/hongqi.jpeg' },
    { name: '红旗H5', price: 200000, url: '../img/hongqi.jpeg' }
  ],
    iconList: [{
      icon: 'hotfill',
      color: 'red',
      badge: 120,
      name: '全国购'
    
    
    }, {
      icon: 'explorefill',
      color: 'orange',
      badge: 1,
      name: '探索'
    }, {
      icon: 'goodsfill',
      color: 'yellow',
      badge: 0,
      name: '卖车'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '排行榜'
    }, {
      icon: 'evaluate_fill',
      color: 'blue',
      badge: 0,
      name: '收藏'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: '发现'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
    gridCol: 3,
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this)
    })
    var that=this
    wx.request({
      url: 'http://localhost:8080/car/findAll',
      header: { 'content-type': 'text/plain;charset=utf-8' },
      success: (data) => {
        console.log(data)
        that.setData({
          cars: data.data
        })
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