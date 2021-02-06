const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//var Schema = mongoose.Schema;

const servicesSchema = new mongoose.Schema({
    vaccine: {type: Boolean, default: false},
    rapidTest: {type: Boolean, default: false},
    test: {type: Boolean, default: false},
});

const locationSchema = new mongoose.Schema({
    name: { type: String,
    required: true 
},
    address: String,
    coords: {
        type: { type: String },
        coordinates: { type: [Number] , required: true },
    },
services: [servicesSchema],
 });
 locationSchema.index( {coords: '2dsphere'} ); 
 //longitude (valid values(-180, 180)) latitude (valid values(-90, 90))

 mongoose.model('Location', locationSchema);