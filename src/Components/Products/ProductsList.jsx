import React,{Fragment} from 'react'
import Fruits from '../../DummyData/Fruits'
import Veg from '../../DummyData/Veg'
import Groceries from '../../DummyData/Groceries'
import {Link } from 'react-router-dom'
import './Productlist.css'

function ProductsList() {


   return (
        <div className='productlist' >
           <div>
           <h1>Fruits List</h1>
            <table className='table table-striped table-hover table-bordered container '>
                <thead className='thead-dark"'>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                           Price
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Fruits.length > 0 ?
                            Fruits.map((item,idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                        <img src={item.img} alt="" /> 
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                                <button className='btn btn-primary'  >Edit</button>
                                            </Link>
                                            <button className='btn btn-danger' >Delete</button>
                                        </td>
                                    </tr>

                                )
                            }) :
                            "no Fruits available"
                    }
                </tbody>
            </table>
            <Link to={`/add`}>
                <button className='btn btn-secondary'>Add Fruits</button>
            </Link>
           </div>
           <div>
           <h1>Vegetables List</h1>
            <table className='table table-striped table-hover table-bordered container '>
                <thead className='thead-dark"'>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                           Price
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Veg.length > 0 ?
                            Veg.map((item,idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                        <img src={item.img} alt="" /> 
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                                <button className='btn btn-primary'  >Edit</button>
                                            </Link>
                                            <button className='btn btn-danger' >Delete</button>
                                        </td>
                                    </tr>

                                )
                            }) :
                            "no Fruits available"
                    }
                </tbody>
            </table>
            <Link to={`/add`}>
                <button className='btn btn-secondary'>Add Vegetables</button>
            </Link>
           </div>
           <div>
           <h1>Groceries List</h1>
            <table className='table table-striped table-hover table-bordered container '>
                <thead className='thead-dark"'>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                           Price
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       Groceries.length > 0 ?
                       Groceries.map((item,idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                           <img src={item.img} alt="" /> 
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                                <button className='btn btn-primary'  >Edit</button>
                                            </Link>
                                            <button className='btn btn-danger' >Delete</button>
                                        </td>
                                    </tr>

                                )
                            }) :
                            "no Fruits available"
                    }
                </tbody>
            </table>
            <Link to={`/add`}>
                <button className='btn btn-secondary'>Add Groceriesr</button>
            </Link>
           </div>
        </div>
    )
}

export default ProductsList
