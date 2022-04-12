export const getAddCategory = ({ }, res) => {
    try {

        res.render('pages/addCategory');

    } catch(e) {
      return res.status(400).send(e);
    }
    return null;
  };


  export const postRegister = (req, res) =>  {
    const newCategory = new Category();
    newCategory.categoryId = req.body.categoryId;
    newCategory.categoryName = req.body.categoryName;
    
    newCategory.save().then(CategorySaved => {
  
      return res.redirect('/categoryList')
  
    }).catch(err => {
  
      res.send('Category was not saved because: ' + err);
  
    });
  
  };