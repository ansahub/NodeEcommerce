import Item from "../models/Item.js";

//1. Retrieving data from the cart
//2. Be able to delete from cart and that also deletes in the db (order)
export const getCartDetail = (req, res) => {
    try {               

      const cart = JSON.parse(req.cookies.cart)
      Item.find({itemId:{ $in: cart}}).lean().then(item =>{       
        const everyItem = [];
        let totalPrice = 0;

        cart.forEach(cartItem => {
          const y = item.find(x => x.itemId == cartItem)
          everyItem.push(y);
          totalPrice += y.price 
        });        
        
        res.render('pages/cartDetail', {items: everyItem, totalPrice});
      });

    } catch(e) {
      console.log(e);
      return res.status(400).send(e);
    }
    return null;
  };

 