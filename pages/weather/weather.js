// 百度地图api
var bmap = require('../baiduApi/bmap-wx.min.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
      current: null,
  },
  log: function (log) {
      console.log(log)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.init()
        
      var that = this;
      // 新建百度地图对象 
      var BMap = new bmap.BMapWX({
          ak: 'ZA62lg681e2IjYSrzPBnYIjLYIv2j6ZD'
      });
      var fail = function (data) {
        //   console.log(data)
      };
      var success = function (data) {
          var c = data.currentWeather[0]
          that.setData({
              current:c
          })
          console.log(c)
      }
      // 发起weather请求 
      BMap.weather({
          fail: fail,
          success: success
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
    
  },
  init: function () {
    let self = this
    wx.getLocation({
        success: function(res) {
            self.setData({

            })
            let [x, y] = [res.latitude, res.longitude]
        },
        fail: function() {

        }
    })
  },
  getWeather: function() {

  }
  
})