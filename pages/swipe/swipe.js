

Page({
  data: {
    imgUrls: [
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad:function(){
    wx.request({
      url: 'https://api.tuchong.com/discover-app?os_api=23&device_type=MI&device_platform=android&ssmix=a&manifest_version_code=232&dpi=440&abflag=0&uuid=326132612301652&version_code=232&app_name=tuchong&version_name=2.3.2&openudid=4352d5fadf543531&resolution=1280*1000&os_version=5.8.1&ac=wifi&aid=0',
      success: (res)=> {
        console.log(res)
        console.log(res.data.banners)
        this.setData({
          imgUrls:res.data.banners
        })
      }
    })
  }
})