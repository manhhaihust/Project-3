const express = require('express')

const productHandlers = require('../modules/product')

const productRouter = new express.Router()

productRouter.get('/', productHandlers.findMany)

productRouter.get('/:id', productHandlers.findOne)

productRouter.post('/', productHandlers.create)

productRouter.put('/', productHandlers.update)

productRouter.delete('/:id', productHandlers.delete)

module.exports = productRouter