import Router from 'koa-router'
const router = new Router()

import controllers from '../controllers'


router.get('/', (ctx, next) => {

	controllers.home.getList(ctx, next)

	ctx.cookies.set('npm-username','wangwei')
 	ctx.body = '首页';
});



//404
router.get('*', async(ctx,next)=>{
    ctx.body = '404页面';
})

module.exports = router