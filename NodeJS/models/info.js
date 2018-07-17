const mongoose = require('mongoose');

var Information = mongoose.model('Information', {
    name: { type: String },
    title: { type: String },
    desciption: { type: String },
    date: { type: String }

});

module.exports = { Information };