const {products} = require("../db");
exports.Category = {
    products: (parent, args, context) => {
        var {id: categoryId} = parent
        return products.filter(product => product.categoryId === categoryId)
    }
}