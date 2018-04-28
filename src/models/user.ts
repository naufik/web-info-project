import * as mongoose from 'mongoose';

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
        // "lists": [ListIDs]
    }
);

const User = mongoose.model('user', userSchema);

export default User;
