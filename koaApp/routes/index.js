const router = require('koa-router')({
  prefix:'/'
})

const indexController = require('../controllers/index.js')

router.get('/', indexController.indexRender);


module.exports = router