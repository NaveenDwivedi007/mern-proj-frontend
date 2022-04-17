import React from 'react';
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';
import Base from '../core/Base';



const AdminDashboard=()=>{
// it can be done like < const {name,email,role} = isAutheticated().user >  
const {user:{name,email}} =isAutheticated()

  const adminLeftSide=()=>{
    return(
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/create/category" className="nav-link text-success">
              Create Category</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/categories" className="nav-link text-success">
              Manage Category</Link>
          </li>
          <li className="list-group-item">
          <Link to="/admin/create/product" className="nav-link text-success">
            Create Product</Link>
          </li>
          <li className="list-group-item">
          <Link to="/admin/Products" className="nav-link text-success">
            Manager Product</Link>
          </li>
          <li className="list-group-item">
          <Link to="/admin/orders" className="nav-link text-success">
          Manager Order</Link>
          </li>
        </ul>
      </div>
    )
  }
  const adminRightSide=()=>{
    return(
      <div className="card mb-4">
        <h4 className="card-header">Admin Info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge bg-success mr-2">Name:</span>  {name}
          </li>
          <li className="list-group-item">
            <span className="badge bg-success mr-2">email:</span>  {email}
          </li>
          <li className="list-group-item">
            <span className="badge bg-danger">Admin Area</span>
          </li>
        </ul>
      </div>
    )
  }




  return(
    <Base title="Welcome to admin area"
     description="Manage all of your product here"
     className="container bg-success p-4"
     >
    <div className="row">
      <div className="col-3">{adminLeftSide()}</div>
      <div className="col-9">{adminRightSide()}</div>
    </div>
    </Base>
  )
}

export default AdminDashboard