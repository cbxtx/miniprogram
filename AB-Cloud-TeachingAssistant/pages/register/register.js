// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:'',
        phone:'',
        school:'',
        studentId:'',
        enrollmentYear:''
    },
    changeName:function(e) {
        this.setData({
            name:e.detail.value
        })
    },
    changePhone:function(e) {
        this.setData({
            phone:e.detail.value
        })
    },
    changeSchool:function(e) {
        this.setData({
            school:e.detail.value
        })
    },
    changeStudentId:function(e) {
        this.setData({
            studentId:e.detail.value
        })
    },
    changeEnrollmentYear:function(e) {
        this.setData({
            enrollmentYear:e.detail.value
        })
    },

    bindSubmit:function(e) {
        wx.request({
          url: 'http://zjgsujiaoxue.applinzi.com/index.php/Api/User/register_by_openid',
          data:{
              openid:wx.getStorageSync('jiaoxue_OPENID'),
              globalData:JSON.stringify(app.globalData.userInfo),
              name:this.data.name,
              phone:this.data.phone,
              school:this.data.school,
              studentId:this.data.studentId,
              enrollmentYear:this.data.enrollmentYear
          },
          success:res=>{
              if(res.data.is_register) {
                  wx.redirectTo({
                    url: '../index/index',
                  })
              }
          },
          fail:res=>{

          },
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})