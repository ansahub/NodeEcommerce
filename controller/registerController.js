import User from "../models/User.js";
import bcrypt from 'bcrypt';

//Get register page
export const getRegister = ({ }, res) => {
    try {
      res.render('pages/registerUser');
  
    } catch (e) {
      return res.status(400).send(e);
    }
    return null;
  };


//Register a USER 
export const postRegister = (req, res) => {
 
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.lastname = req.body.lastname;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.admin = req.body.admin;

    //Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {

            if (err) return err;

            newUser.password = hash;
            newUser.save().then(userSaved => {

              return res.redirect('/login')

            }).catch(err => {

                res.send('User was not saved because....' + err);

            });

        });
    });
};
