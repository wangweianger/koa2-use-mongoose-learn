import Koa from 'koa'
import path from 'path'
import cookie from 'koa-cookie'
import mongoose from 'mongoose'
import cors from 'koa-cors'
import render from 'koa-ejs'
import serve from 'koa-static'
import LRU from 'lru-cache'

import router from './routes'
import { SYSTEM } from './config'


const app = new Koa();
const env = process.env.NODE_ENV || 'production'


// 打印日志
app.on('error', (err, ctx) => {
    console.log(err)
});

render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'html',
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    debug: SYSTEM.DEBUG
});


//监听http请求
mongoose.connect('mongodb://localhost:27017/blog', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
});

app
	.use(cookie())
    .use(serve(__dirname + "/assets",{
        maxage: env === 'development' ? 0 : 365 * 24 * 60 * 60
    }))
	.use(router.routes())
  	.use(router.allowedMethods())
	.listen(SYSTEM.PROT);


console.log(`服务启动了：路径为：127.0.0.1:${SYSTEM.PROT}`)

export default app

