const config = require('config');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors2');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'service task';
});

app.use(logger());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.port, () => {
  console.log(`server started @ port:${config.port}`)
});