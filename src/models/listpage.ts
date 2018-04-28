import * as mongoose from 'mongoose';
import * as ListModel from './item'

var listPageSchema  = new mongoose.Schema(
    {
        "userid": String,
        "contents": [ListModel]
    }
);

const ListPage = mongoose.model('list', listPageSchema);

export default ListPage;
