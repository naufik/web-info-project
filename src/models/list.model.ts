import * as mongoose from 'mongoose';

var listSchema  = new mongoose.Schema(
    {
        "name": String,
        "contents": [
            {
                "name": String,
                "amount": Number,
                "unit": String
            }
        ],
        "url": String
    }
);

const List = mongoose.model('list', listSchema);

export default List;
