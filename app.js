import express from 'express';
import { indexRouter } from './routes/indexRoute.js';
import { engine } from "express-handlebars";
import path from 'path';
import { mongoose } from 'mongoose'
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';


//Setting up MongoDB with Mongoose--------------------------------
var db = mongoose.connect('mongodb://127.0.0.1/Ecommerce', () => {
  console.log('connected');
});



//EXPRESS|APP----------------------------------------------------------
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join('./public')));
app.engine('handlebars', engine({ defaultLayout: 'index' }));
app.set('view engine', 'handlebars');

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  secret: 'ansari',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: oneDay }
}));

app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});





app.use('/', indexRouter) //Use routes (URL)

const port = process.env.PORT || 4000; // default port to listen

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
