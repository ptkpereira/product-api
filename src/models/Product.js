const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    createdAt: { type: Date, default: Date.now }
})

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', ProductSchema);