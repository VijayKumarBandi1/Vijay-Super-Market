import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import Navbar from '../Navbar/Navbar'
import './Buyproduct.css'
import {HiCurrencyRupee} from 'react-icons/hi'

function BuyProduct() {

    const [count,setCount]=useState(1)
    const location = useLocation()
    console.log(location.state, "use loca")
    const { name, img, price } = location.state
     
    const decCount=()=>{
        if(count<=1){
            alert("please enter your Quantities")
        }
        else{
            setCount(count-1)
        }
    }

    const incCount =()=>{
        setCount(count+1)
    }

    return (
        <div>
            <Navbar />
            <div className='container buyproduct'>
                <div className='row'>
                    <div className='col-6 col-sm-4 col-md-4 col-lg-4 '>
                        <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }} >
                            <img className='card-img-top' src={img} />
                            <div className='card-body'>
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{price}<HiCurrencyRupee /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inputfields'>
                   <button className='decbtn btn btn-primary' onClick={decCount}>-</button>
                   <input className='input' type="number" value={count} />
                   <button className='incbtn btn btn-primary' onClick={incCount}>+</button>
                </div>
                <div className='totalprice'>
                    <h1 className='totalpriceh1'>Total Price</h1>
                    <span className='totalpricespan'>{count*price}<HiCurrencyRupee /></span>
                    <button className='fluid btn btn-primary'>pay</button>
                </div>
            </div>
        </div>
    )
}

export default BuyProduct
