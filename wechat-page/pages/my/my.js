// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      name:'天下第一',
      motto:'头皮发麻',
      url:''
    },
    myArr:[
      {bottomImg:"../img/32.png",txt:"购买历史"},
      {bottomImg:"../img/33.png",txt:"支付记录"},
      {bottomImg:"../img/34.png",txt:"举报投诉"}
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'http://localhost:8080/user/getUserById?id=1',
      header: { 'content-type': 'text/plain;charset=utf-8' },
      success: (data) => {
        console.log(data)
        that.setData({
          user:data.data
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