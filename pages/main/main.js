// pages/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fanweiy: '',
    fanweix: 1,
    duosao: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  funfanweix: function(e) {
    this.setData({
      fanweix: parseInt(e.detail.value)
    })
  },
  funfanweiy: function(e) {
    this.setData({
      fanweiy: parseInt(e.detail.value)
    })
  },
  funduosao: function(e) {
    let p = this.data.fanweiy - this.data.fanweix + 1;
    if (e.detail.value < p) {
      p = e.detail.value;
    }
    this.setData({
      duosao: parseInt(p)
    })
  },
  start: function() {
    let set = new Set();
    while (set.size < this.data.duosao) {
      let arr = Math.round(Math.random() * (this.data.fanweiy - this.data.fanweix) + this.data.fanweix);
      // console.log("arr333  " + arr);
      set.add(arr);
    }
    // console.log("size333  " + set.size);

    let chars = [];
    for (let item of set.values()) {
      if (item < 10) {
        item = '0' + item;
      }
      chars.push(item)
      // console.log(item);
    }
    // console.log(chars);

    this.setData({
      number: chars
    })
  }
})