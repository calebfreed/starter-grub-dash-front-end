const path = require("path");

// Use the existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));

// Use this function to assign ID's when necessary
const nextId = require("../utils/nextId");

// /dishes handlers needed to make the tests pass

function list(res, req){
    res.json({ data: uses})
}

module.exports = {
    list
}
