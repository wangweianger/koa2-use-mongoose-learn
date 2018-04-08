import { home } from '../models'

class Home {

    constructor() {

    }

    getList(ctx,next){
    	let HOME = new home({
            name: 'zane',
            age: 25
        });
        let result = HOME.save();

        result.then(data=>{
        	console.log(data)
        })
        

        return next();
    }

} 

module.exports = new Home()   