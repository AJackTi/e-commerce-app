const {products, categories} = require("../db");
exports.Query = {
    hello: () => {
        return "World!"
    },
    product: (parent, args, context) => {
        var product = products.find(product => product.id === args.id)
        if (!product) return null
        return product
    },
    products: () => {
        return products;
    },
    categories: () => {
        return categories;
    },
    category: (parent, args, context) => {
        var {id} = args
        var category = categories.find(category => category.id === id)
        if (!category) return null
        return category
    }
}