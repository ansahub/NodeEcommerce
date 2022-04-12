import { Router } from "express";
import { getRegister, postRegister } from "../controller/registerController.js";
import { getLogin, postLogin } from "../controller/loginController.js";
import { getLogOut, postLogOut} from "../controller/logoutController.js";
import { getAddItem, postAddItem } from "../controller/addItemController.js";
import { getCategoryList } from "../controller/categoryListController.js";
import { getAddCategory } from "../controller/addCategoryController.js";
import { getItemList } from "../controller/itemListController.js";
import { getItemDetail } from "../controller/detailPageController.js";
import { getCartDetail } from "../controller/cartDetailController.js";
import { postAddOrder } from "../controller/addOrderController.js";

export const indexRouter = Router();

//2. fill other routes
indexRouter.get('', getItemList);
indexRouter.get('/detailpage/:id', getItemDetail);

indexRouter.get('/registerUser', getRegister)
indexRouter.post('/registerUser', postRegister);

indexRouter.get('/login', getLogin);
indexRouter.post('/login', postLogin);

indexRouter.get('/logout', getLogOut);
indexRouter.post('/logout', postLogOut)

indexRouter.get('/accessDenied', (req, res) => res.render('pages/accessDenied'));

indexRouter.get('/addItem', getAddItem);
indexRouter.post('/addItem', postAddItem);


indexRouter.get('/categoryList', getCategoryList);

indexRouter.get('/addCategory', getAddCategory);

indexRouter.get('/cartDetail', getCartDetail);

indexRouter.post('/cartDetail', postAddOrder);

indexRouter.get('/finalpage', (req, res) => res.render('pages/finalpage'));





