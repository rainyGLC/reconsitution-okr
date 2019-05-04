const indexController = {
  indexRender:async(ctx,next) => {
    ctx.body = 'hello koa!'
  },
  apiRender:async(ctx,next)=>{
    ctx.body = 'hello koa and hello world and nodejs'
    ctx.body = {code:200,data:{message:'hello'}}
  }
}
module.exports = indexController;
