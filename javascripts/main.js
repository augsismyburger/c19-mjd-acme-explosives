"use strict";

// BROWSERIFY
let categories = require('./categories');
let types = require('./types');
let products = require('./products');
let write = require('./write');


// console.log(categories);
categories.getCategories().then(
    types.getTypes,
    console.error
).then(
    products.getProds,
    console.error
).then(
    write.print
)
// delay(console.log(catData, typeData, prodData), 9000);

