
Page({
  data: {
    swiperArr: [],
    headNavArr:[],


    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  
  onLoad: function () {
        wx.request({
          url: 'http://localhost:8080/queyWXIndexInfo',
          header: {'content-type':'text/plain;charset=utf-8'},
          success: (data) =>{
            console.log("成功")
            this.setData({
              swiperArr:data.data.queryImgByGenre,
              headNavArr:data.data.queryType
            })
          }
        })
    // wx.request({
    //   url: 'http://localhost/xcxTest2',
    //   header: {'content-type':'text/plain;charset=utf-8'},
    //   success: (data) => {
    //     console.log("调用成功::"+data.data)
    //     this.setData({
    //       swiperArr: data.data.queryInexImg,
    //       headNavArr:data.data.queryType
    //     })
    //   }
    // })
  }
})
