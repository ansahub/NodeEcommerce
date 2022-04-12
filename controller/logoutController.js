
export const getLogOut = ({ }, res) => {
    try {
      
        res.render('pages/logout');

    } catch(e) {
      return res.status(400).send(e);
    }
    return null;
  };

  export const postLogOut = (req, res) => {
    try {
      
      req.session.loggedIn = false;
      req.session.user = null;

      res.redirect('/');

    } catch(e) {
      return res.status(400).send(e);
    }
    return null;
  };