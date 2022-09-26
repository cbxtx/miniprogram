// app.js
App({
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                wx.request({
                    url: 'https://zjgsujiaoxue.applinzi.com/index.php/Api/Weixin/code_to_openidv2',
                    data: {
                        'code': res.code,
                        'from': 'wx699de655194b7fed'
                    },
                    success:function(res) {
                        console.log(res.data)
                        wx.setStorageSync('jiaoxue_OPENID', res.data.openid)
                        if(!res.data.is_register) {
                            wx.showModal({
                              title:'提示',
                              content:'请先注册',
                              showCancel:false,
                              confirmText:'确定',
                              success:function(res) {
                                  wx.navigateTo({
                                    url: '/pages/register/userlogin',
                                  })
                              }
                            })
                        }
                    },
                    fail:function(res) {
                        console.log('res' + res)
                    }
                })
            }
        })
    },
    globalData: {
        userInfo: null
    }
})