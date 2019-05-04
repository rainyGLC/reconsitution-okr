// const axios = require('axios');
// const configs = require('./../config.js');
const authCode = require('./../utils/authCode.js');
const { formateDay } = require('./../utils/date.js'); 
const UserModel = require('./../models/user.js');
const User = new UserModel();
const Weixin = require('./../models/weixin.js');


const loginControll = {
  login: async (ctx,next) =>{
    let code = ctx.request.body.code;
    if(!code) {
      ctx.state.body ={code:0,message:'code empty!'}
    }

    let weixinRequest = await Weixin.code2Session(code);
    let weixinData = weixinRequest.data;
    let open_id    = weixinData.openid;
    console.log(open_id);



    const users = await User.select({open_id});
    const user = users[0];
    // console.log(user,'ooo');
    let id;
    if(!user){
        const userArr = await User.insert({open_id});
        id = userArr[0];
    }else{
        id = user.id;
    }
    // console.log(id);
    let create_time = formateDay(new Date());
    let auth_Code = 'rainy' +'\t' + create_time + '\t' + id;
    let token = authCode(auth_Code,'ENCODE');
    // console.log(token);
    ctx.state.code = 200;
    ctx.state.data={taken:token}
  }
} 
module.exports = loginControll;