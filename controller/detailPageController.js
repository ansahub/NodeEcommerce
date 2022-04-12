import Item from "../models/Item.js";

export const getItemDetail = (req, res) => {
    try {

        //Key is the attribute in Item model 
        //value is what you state in url (dynamic) which is "id" in this case(see indexRoute)
      Item.findOne({itemId:req.params.id}).lean().then(item =>{ 

        res.render('pages/detailPage', {item: item});

      });

    } catch(e) {
      console.log(e);
      return res.status(400).send(e);
    }
    return null;
  };