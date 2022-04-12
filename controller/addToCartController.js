import Category from "../models/Category.js";
import Item from "../models/Item.js";

//1.
export const postAddItem = (req, res) => {

  Category.findOne({ categoryId: req.body.categoryId }).lean().then(category => {
    const newItem = new Item();
    newItem.itemId = req.body.itemId;
    newItem.itemName = req.body.itemName;
    newItem.price = req.body.price;
    newItem.category = category;

    newItem.save().then(itemSaved => {

      return res.redirect('/');
  });

  }).catch(err => {

    res.send('Item was not saved because: ' + err);

  });
};