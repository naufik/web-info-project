import * as mongoose from 'mongoose';

var listSchema  = new mongoose.Schema(
    {
        "listID": Number,
        "contents": [
            {
                "name": String,
                "amount": {type: Number, unique: true},
                "unit": String
            }
        ],
        "url": String
    }
);

const List = mongoose.model('list', listSchema);

export default List;
