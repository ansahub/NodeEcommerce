import Item from "../models/Item.js";
import Category from "../models/Category.js";


export const getItemList = async (req, res) => {

  const categories = await Category.find({}).lean().exec();
  
    try {
      
    let options = {} 

    if(req.query.q){
      
      options.itemName = {$regex: '.*' + req.query.q + '.*' };
      // options = {...options, itemName: {$regex: '.*' + req.query.q + '.*' }};
    }

    if(req.query.categoryId){

      options['category.categoryId'] =  parseInt(req.query.categoryId);

    }   

    const item = await Item.find(options).lean().exec();
    res.render('pages/home', {item: item, categories});

    // Item.find(options).lean().then(item=>{

    //   res.render('pages/home', {item: item, categories});
    // });

    } catch(e) {
      console.log(e);
      return res.status(400).send(e);
    }

    return null;
  };
