import React from 'react'
import './Products.css'
import Fruits from '../../DummyData/Fruits'
import Veg from '../../DummyData/Veg'
import Groceries from '../../DummyData/Groceries'
import { useNavigate } from "react-router-dom"
import {HiCurrencyRupee} from 'react-icons/hi'

function Product({ user }) {
    console.log(user, "user")
    const navigate= useNavigate()

    function navigateToProduct(items){
        console.log(items,"items")
        navigate("/buy",{state:items})
    }

    return (
        <div className='product'>
            <h1>Welcome {user.state.firstName}</h1>
            <h1>Fruits</h1>
            <div className="container">
                <div className="row">
                    {
                        Fruits.length > 0 ?
                            Fruits.map((items, idx) => {
                                return (
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4" key={idx}>
                                        <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }} >
                                            <img className="card-img-top" src={items.img} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{items.name}</h5>
                                                <p className="card-text">{items.price}<HiCurrencyRupee/></p>

                                                <button className='btn btn-primary' onClick={()=>{navigateToProduct(items)}}>Buy</button>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null

                    }
                </div>
            </div>
            <h1>Vegetables</h1>
            <div className="container">
                <div className="row">
                    {
                        Veg.length > 0 ?
                            Veg.map((items, idx) => {
                                return (
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4" key={idx} >
                                        <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }} >
                                            <img className="card-img-top" src={items.img} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{items.name}</h5>
                                                <p className="card-text">{items.price}<HiCurrencyRupee/></p>
                                                <button className='btn btn-primary' onClick={()=>{navigateToProduct(items)}}>Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null

                    }
                </div>
            </div>
            <h1>Groceries </h1>
            <div className="container">
                <div className="row">
                    {
                        Groceries.length > 0 ?
                            Groceries.map((items, idx) => {
                                return (
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4" key={idx}>
                                        <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }} >
                                            <img className="card-img-top" src={items.img} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{items.name}</h5>
                                                <p className="card-text">{items.price}<HiCurrencyRupee/></p>
                                                <button className='btn btn-primary' onClick={()=>{navigateToProduct(items)}}>Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null

                    }
                </div>
            </div>
        </div>
    )
}

export default Product
