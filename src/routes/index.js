import Router from 'koa-router'
const router = new Router()

import controllers from '../controllers'


router.get('/', async (ctx, next) => {

 	let datas = {
 		title:'首页'
 	}

 	datas.result = await controllers.home.getList()

 	await ctx.render('index',{ datas:datas })

});

router.get('/set', async (ctx, next) => {

 	let result = controllers.home.saveList()
 	console.log(result)

 	ctx.body = result

});




//404
router.get('*', async(ctx,next)=>{
    ctx.body = '404页面';
})

module.exports = router