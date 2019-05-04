const request = require('./../../models/request.js')
const User = require('./../../models/user.js')


Page({
  data: {

  },
  onLoad:function(options){
    let token = wx.getStorageSync('token');
    console.log(token,'ooop');
    if(token){
      wx.switchTab({
        url: '/pages/todo/todo'
      })
    }
  },
  startLogin:function(){
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       // console.log(res.code)
    //       // 发起网络请求
    //       wx.request({
    //         url: 'http://localhost:3000/api/login',
    //         method:'POST',
    //         data: {
    //           code: res.code
    //         },
    //         success(res){
    //           console.log(res.data);
    //           let token = res.data.token;
    //           wx.setStorageSync('token',token);
    //           wx.switchTab({
    //             url: '/pages/todo/todo'
    //           });
    //           // wx.getStorageSync('token');
    //           // headers:{
    //           //   token:token
    //           // }
    //         },
            
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
    wx.login({
      success(res) {
        if(res.code) {
          User.login(res.code).then(res => {
            // console.log(res.data);
            let token = res.data.token;
            wx.setStorageSync('token',token)
            wx.switchTab({
              url: '/pages/todo/todo'
            })
          })
        }else {
          console.log('登录失败！'+ res.errMsg)
        }
      }
    })
  }
})