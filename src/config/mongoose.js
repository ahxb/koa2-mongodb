//config/mongoose.js
const mongoose = require('mongoose');
const config = require('../config');
const models = require('../models');

const dbDB='mongodb://localhost/leo007'
// 设置全局v8promise
mongoose.Promise=require('bluebird');

// 开启debug
mongoose.set('debug',true);

// 监控连接
mongoose.connection.on('error', (error) => {
  console.log('MongoDB连接错误：' + error)
})
mongoose.connection.once('open', (callback) => {
  console.log('MongoDB连接成功~~')
})

// 导出数据库
const db = () => {
  for(item in models)
  return mongoose.connect(dbDB, {
    useMongoClient: true
  });
}

module.exports = db;