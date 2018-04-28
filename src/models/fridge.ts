import * as mongoose from 'mongoose';
import * as ItemModel from './item'

var fridgeSchema  = new mongoose.Schema(
  {
    "userid": String,
    "contents": [ItemModel]
  }
);

const Fridge = mongoose.model('fridge', fridgeSchema);

export default Fridge;
