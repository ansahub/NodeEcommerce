import Item from "../models/Item.js";
import Order from "../models/Order.js";
import { v4 as uuidv4 } from 'uuid';

export const postAddOrder = (req, res) => {

  const cart = JSON.parse(req.cookies.cart)
  Item.find({ itemId: { $in: cart } }).lean().then(item => {

    const newOrder = new Order();

    let totalPrice = 0;

    cart.forEach(cartItem => {
      const y = item.find(x => x.itemId == cartItem)
      totalPrice += y.price
      newOrder.items.push(y);
    });

    newOrder.orderId = uuidv4();
    newOrder.totalPrice = totalPrice;      

    newOrder.save().then(orderSaved => {      
      res.cookie('cart', '');
      return res.redirect('/finalPage');
    });

  }).catch(err => {

    res.send('Order was not placed & saved because: ' + err);

  });
};