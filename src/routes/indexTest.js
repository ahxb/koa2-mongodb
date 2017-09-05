const koaRouter = require('koa-router');

// 统一增加版本前缀
const router = koaRouter({
    prefix: '/api'
});

/* 反向代理配置 */
// const pixie = require('koa2-pixie-proxy');

/* 反向代理配置host */
// const proxy = pixie({host: 'http://localhost:9999'});

/* 跨域配置 */
router.all('*', async(ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHead' +
        'erFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
    ctx.set('Content-Type', 'application/json;charset=utf-8');
    if (ctx.method == 'OPTIONS') {
        ctx.status = 200;
    } else {
        await next();
    }
});

/* 代理转发示例 */
//router.get('/api/goods',proxy('/api/goods'))

// 以下是api模块
// const controllers = require('../controllers');

/* *************************以下是api模块 ***************************/

// test
router.get ('/a', async (ctx, next) => {

    console.log (1111, ctx.request.query);
    ctx.body = {
        success: '200',
        data: {
            num: 'leoisok'
        }
    }
})
router.post ('/post', async (ctx, next) => {


    console.log (44,  ctx.request.body);


    // let postData = await parsePostData (ctx);

    ctx.body = {

        success: '200',
        data: {
            num: ctx.request.body.name
        }
    }
})


module.exports = router;
