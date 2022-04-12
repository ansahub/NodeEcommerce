import Category from "../models/Category.js";

export const getCategoryList = ({ }, res) => {
    try {

      Category.find({}).lean().then(categories=>{

        console.log(categories);
        res.render('pages/categoryList', {categories: categories});
        
      });

    } catch(e) {
      console.log(e);
      return res.status(400).send(e);
    }
    return null;
  };

  
  