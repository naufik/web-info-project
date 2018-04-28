import * as mongoose from 'mongoose';

var itemSchema = new mongoose.Schema(
  {
    "name": String,
    "expiryDate": Date,
    "dateAdded": { type: Date, default: Date.now },
    "amount": Number,
    "unit": String
  }
);

const Item = mongoose.model('item', itemSchema);

export default Item;
