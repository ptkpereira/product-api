const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const options = {
            sort: { createdAt: -1 },
            page,
            limit: 10,
        }
        const products = await Product.paginate({}, options);
        return res.send(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id)
        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body)
        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }

}