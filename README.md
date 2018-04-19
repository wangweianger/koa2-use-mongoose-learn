## use mongoose

```js
npm install mongoose --save

```

### Linked database
```js
mongoose.connect('mongodb://localhost:27017/blog', function(err) {
    if (err) {
        console.log('数据库连接失败');
    } else {
        console.log('数据库连接成功');
    }
});
```

### add Schema
```js
let homeSchema = new mongoose.Schema({
    username: String,
    password: String,
    updated:  Date,
});
```

### common method
mongoose document url:http://mongoosejs.com/docs/guide.html

```js
Model.find()
Model.findById()
Model.findOne()
Model.count()
Model.where()
Model.distinct()
Model.create()
Model.update()
Model.insertMany()
Model.updateMany()
Model.updateOne()
Model.replaceOne()
Model.remove()
Model.deleteOne()
Model.deleteMany()
Model.prototype.remove()
Model.prototype.model()
```

## Runing
```js
git clone https://github.com/wangweianger/koa2-use-mongoose-learn
npm install

//Development
npm run dev

//test page
http://127.0.0.1:8085/

```




