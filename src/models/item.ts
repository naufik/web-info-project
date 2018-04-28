import * as mongoose from 'mongoose';

var itemSchema = mongoose.Scheme(
  {
    "name": String,
    "expiryDate": Date,
    "daysLeft": Number,
    ""
    "dateAdded":
  }
);

const Item = mongoose.model('item', itemSchema);

export default Item;

Item.find({
  name: 'Banana'
}).then((item: {name: string}) => {
  console.log(item.name);
});

