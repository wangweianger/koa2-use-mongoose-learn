const mongoose = require('mongoose');

//首页表结构
let homeSchema = new mongoose.Schema({

    //分类名称
    username: String,

    password: String,

});

module.exports = mongoose.model('Home', homeSchema);