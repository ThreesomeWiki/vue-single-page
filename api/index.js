const koa = require('koa');
const Router = require('koa-router');
const proxy = require('http-proxy-middleware');
const c2k = require('koa2-connect');

const app = new koa();
const router = new Router();

router.get(
    /\/meizi\/*/,
    c2k(
        proxy({
            target: 'https://i5.meizitu.net/',
            pathRewrite: { '^/meizi': '' },
            changeOrigin: true,
            headers: {
                referer: 'https://m.mzitu.com/',
            },
        }),
    ),
);

app.use(router.routes());

app.listen(3000, () => console.log('port 3000'));
