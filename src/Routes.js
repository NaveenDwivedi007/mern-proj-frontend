import React from "react";
import {Route,Switch , BrowserRouter} from "react-router-dom"
import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Home from "./core/Home"
import AdminDashboard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import UserDashboard from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory"
import AddProduct from "./admin/AddProduct"
import ManageProducts from "./admin/ManageProducts"
import Orders from "./admin/Orders"
import ManageCategories from "./admin/ManageCategories";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";



export default function Routes(){
 
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/cart" exact component={Cart}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/signin" exact component={Signin}></Route>
      <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
      <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
      <AdminRoutes path="/admin/create/category" exact component={AddCategory} />
      <AdminRoutes path="/admin/create/product" exact component={AddProduct} />
      <AdminRoutes path="/admin/product/update/:productId" exact component={UpdateProduct} />
      <AdminRoutes path="/admin/Products" exact component={ManageProducts} />
      <AdminRoutes path="/admin/orders" exact component={Orders} />
      <AdminRoutes path="/admin/categories" exact component={ManageCategories} />
      
    </Switch>
    </BrowserRouter>
  )


}