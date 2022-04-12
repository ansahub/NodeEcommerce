import User from "../models/User.js";
import bcrypt from 'bcrypt';
//1.
export const getLogin = ({ }, res) => {
  try {
    res.render('pages/login');

  } catch (e) {
    return res.status(400).send(e);
  }
  return null;
};


export const postLogin = (req, res) => {

  User.findOne({ email: req.body.email }).then(user => {

    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, matched) => {

        if (err) return err;

        if (matched) {
          req.session.loggedIn = true;
          req.session.user = user;
          if (req.session.loggedIn) {
            
            return res.redirect('/'); //first page
          }
        }
        else {
          return res.redirect('/accessDenied');
        }
      });
    }
  });
};

