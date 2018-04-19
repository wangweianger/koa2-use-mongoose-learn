const mongoose = require('mongoose');

//首页表结构
let homeSchema = new mongoose.Schema({

    //分类名称
    username: String,

    password: String,

    updated: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Home', homeSchema);