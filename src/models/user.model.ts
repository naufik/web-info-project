import * as mongoose from 'mongoose';

var userSchema = new mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "dateAdded": { type: Date, default: Date.now },
        "email": { type:String, unique: true},
        "password": String,
        "location": {
            "city": String,
            "country": String,
            "state": String
        },
        "lists": [mongoose.Schema.Types.ObjectId],
        "fridge": [
            {
                "name": String,
                "expiry": Date,
                "dateAdded": { type: Date, default: Date.now },
                "qty": Number,
                "unit": String
            }
        ],
        "groceries":[
            {
                "name": String,
                "qty": Number,
                "unit": String
            }
        ]
    }
);

const User = mongoose.model('user', userSchema);

export default User;
    