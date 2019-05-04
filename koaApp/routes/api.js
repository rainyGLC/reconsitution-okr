const apirouter = require('koa-router')({
  prefix:'/api'
})
const apiController = require('../controllers/index.js');
const loginController = require('../controllers/login.js');
const textController = require('../controllers/test.js');

apirouter.get('/',apiController.apiRender);
apirouter.get('/test',textController.textInfo);
apirouter.get('/text',textController.textMessage);
apirouter.post('/login', loginController.login);


module.exports = apirouter
