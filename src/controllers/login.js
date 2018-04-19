import { home } from '../models'
import path from 'path'
import jwt from 'jsonwebtoken'
import fs from 'fs'


//生成token的方法
function generateToken(data){
    let created = Math.floor(Date.now() / 1000);
    let cert = fs.readFileSync(path.join(__dirname, '../cert/rsa_private_key.pem'));//私钥
    let token = jwt.sign({
        data,
        exp: created + 3600 * 24
    }, cert, {algorithm: 'RS256'});
    return token;
}

function verifyToken(token){
    let res;
    let cert = fs.readFileSync(path.join(__dirname, '../cert/rsa_public_key.pem'));//公钥
    try{
        let result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {};
        let {exp = 0} = result,current = Math.floor(Date.now()/1000);
        if(current <= exp){
            res = result.data || {};
        }
    }catch(e){

    }
    return res;
}

class Home {

    constructor() {

    }

    setToken(ctx,next){
        let data={username:'admin',password:'123456'}

        // home.findOne(data).then((res)=>{
        //     let _id = res._id;
        //     console.log(_id)
        //     let token = generateToken({_id:_id});
        //
        //
        //
        //     console.log(token)
        // })

        let token = generateToken({_id:'5ad00d3243f01e08855f331a'});
        ctx.cookies.set('token',token)

        // let HOME = new home({
        //     username: 'admin',
        //     password: '123456'
        // });
        // let result = HOME.save();
        
        // result.then(data=>{
        // 	console.log(data)
        // })
        // let result = home.find()
        // result.then(data=>{
        //     console.log(data)
        // })

        return next();
    }

    getToken(ctx,next){
        let token = ctx.cookies.get('token')

        let _id = verifyToken(token)
        console.log(_id)
    }

} 

module.exports = new Home()   