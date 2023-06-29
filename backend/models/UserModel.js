const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    RestaurantName : String,
    RestaurantLocation : Array,
    OwnerName : String,
    OwnerEmail : String,
    OwnerPhone : String,
    OwnerPassword : String,
    menuItems : Object
})

module.exports = mongoose.model('users',UserSchema);
