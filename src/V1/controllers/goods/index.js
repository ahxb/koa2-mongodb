const mongoose = require('mongoose');
const GoodsModel = mongoose.model('Goods');

class goodsController {
    static async create(ctx, next) {
        // if (!ctx.request.query.title || !ctx.request.query.content) {
        //     return next(ctx.throw(400, 'params error'));
        // }
        // const doc = await UserModel.create({title: ctx.request.query.title, content: ctx.request.query.content});
        // ctx.body = "插入成功"
    }
}
module.exports = goodsController;