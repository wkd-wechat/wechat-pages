// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 记录数组元素个数
    totalNum:0,
    favoriteArr:[
      {id:0,imgUrl:"../img/12.png",title:"盛夏海鲜家宴",price:"4999",hot:"100"},
      {id:1,imgUrl:"../img/25.png",title:"家族特式家宴",price:"3999",hot:"200"},
      {id:2,imgUrl:"../img/26.png",title:"法式海鲜家宴",price:"2999",hot:"300"},
      {id:3,imgUrl:"../img/26.png",title:"法式海鲜家宴",price:"2999",hot:"300"},
    ]


  },
//清空
  deleteAll:function(){
    // console.log("deleteAll")
    this.setData({
      totalNum:0,
      favoriteArr:[]
    })
  },
//取消收藏  
  cancel:function(e){
    var that = this;
    // console.log(e.currentTarget.dataset.id);
    var eid = e.currentTarget.dataset.id;
    // console.log(eid);
    //获取data中的数组
    var arr = this.data.favoriteArr;
    //遍历数组
    for(var i in arr){
      // console.log(arr[i].id);
      if (eid == arr[i].id){
        console.log(eid+"==>"+i);
        //移出eid对应那个数组元素
        arr.splice(i,1);
        //把删除数组元素后的数组写回去
        that.setData({
          favoriteArr:arr,
          totalNum:arr.length
        })
      }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取data中数组
      var  favoriteArr =  this.data.favoriteArr;
      //将数组的个数赋值给totalNum
      this.setData({
        totalNum:favoriteArr.length
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