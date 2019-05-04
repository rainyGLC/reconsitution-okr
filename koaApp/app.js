const Koa = require('koa');  //引用koa框架
const bodyParser=require('koa-bodyparser');
const router = require('./routes');
const apirouter = require('./routes/api');
const app = new Koa(); //实力化应用
const response = require('./middleware/response');
const auth = require('./middleware/auth')


// 使用路由，监听3000端口
app
  .use(bodyParser())
  .use(response)
  .use(auth.decode)
  .use(router.routes())//加载路由中间件
  .use(apirouter.routes())
  .use(router.allowedMethods()) 
  //处理的业务是当所有路由中间件执行完成之后，若ctx.status为空，或者404的时候，丰富response对象的hender头
  .listen(3000)





