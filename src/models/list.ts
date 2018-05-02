import * as mongoose from 'mongoose';
import * as ItemModel from './item'

var listSchema  = new mongoose.Schema(
    {
        "userid": String,
        "contents": [ItemModel],
        "url": String
    }
);

const List = mongoose.model('list', listSchema);

export default List;
