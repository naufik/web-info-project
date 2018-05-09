import * as mongoose from 'mongoose';
import * as ListModel from './list.model'

var userSchema = new mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "dateAdded": { type: Date, default: Date.now },
        "email": { type:Number, unique: true},
        "password": String,
        "location": {
            "city": String,
            "country": String,
            "state": String
        },
        "lists": [Number],
        "fridge": [
            {
                "name": String,
                "expiryDate": Date,
                "dateAdded": { type: Date, default: Date.now },
                "amount": Number,
                "unit": String
            }
        ],
        "groceries":[
            {
                "name": String,
                "amount": Number,
                "unit": String
            }
        ]
    }
);

const User = mongoose.model('user', userSchema);

export default User;
    