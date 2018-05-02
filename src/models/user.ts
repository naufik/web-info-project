import * as mongoose from 'mongoose';
import * as ListModel from './item'
import * as ItemModel from './item'

var userSchema = new mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "dateAdded": { type: Date, default: Date.now },
        "email": Number,
        "passwordHash": String,
        "location": {
            "city": String,
            "country": String,
            "state": String
        },
        "lists": [ListModel],
        "fridge": [ItemModel]
    }
);

const User = mongoose.model('user', userSchema);

export default User;
