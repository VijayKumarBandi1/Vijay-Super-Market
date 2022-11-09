import React, { useState, useEffect } from 'react'
import './Login.css'
import PasswordChecklist from "react-password-checklist"
import Home from '../Home/Home'
import { Link, useNavigate } from 'react-router-dom';
import { BiUser } from "react-icons/bi"
import { FiLock } from "react-icons/fi"
import vijay from "../../Assets/Images/vj.jpg"
import bgimg from "../../Assets/Images/supermarket.jpg"
import User from "../../DummyData/User"

function Login() {
  const initialValues = { userName: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [inputFocus, setInputFocus] = useState(false)
  let isUserName = false;
  let isPassword = false;


  const navgite = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    isUser(formValues)


  };

//--------------------------------------------------validate--------------------------------------------------------------------------------------

  const validate = (values) => {
    const errors = {};
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


    //User Name validation
    if (!values.userName) {
      errors.userName = "Username is required!";
    }
    else {
      isUserName = true
    }

    //Password validation
    if (!values.password) {
      errors.password = "Password is required";
    }
    else if (!strongRegex.test(values.password)) {
      errors.password = "invalide Password"
    }

    else {
      isPassword = true
    }

    //navigation
    // if (isUserName && isPassword) {

    //   alert("login success")
    //   navgite("/home", { state: formValues })
    //   console.log(formValues)
    // }


    // else {
    //   alert("login failed")
    //   console.log(isPassword, isUserName)
    // }



    return errors;
  };
//---------------------------------------------------------------isuser-------------------------------------------------------------------------

  const isUser = (userValues) => {
    const user = User.filter(u => { return (userValues.userName === u.userName && userValues.password == u.password) })


    if (user.length > 0) {

      //navigate
      alert("login success")
      navgite("/home", { state: formValues })
      console.log(formValues)
     
    }

    else if(isPassword&& isUserName){
      alert("invaled user details")
    }
    else{
      alert("login failed")
    }
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------

  const OnFocusInput = () => {
    setInputFocus(true)
  }
  const OnFocusOutInput = () => {
    setInputFocus(false)
  }


  return (
    <div className='Loginpagecontainer'>
      <img className='bgimg' src={bgimg} />
      <div className="Loginpage">
        <div className='Loginpageleft'>
          <h1>Vijay super market</h1>
          <small>is a delight for everyone </small>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="vijaylogo">
            <img src={vijay} />
          </div>
          <hr />
          <div className="form-group">
            <BiUser />
            <label className='form-label small' >Username</label>
            <input
              className='form-control'
              type="text"
              name="userName"
              placeholder="Username"
              value={formValues.userName}
              onChange={handleChange}
            />
          </div>
          <p className='text-danger'>{formErrors.userName}</p>

          <div className="form-group">
            <FiLock />
            <label className='form-label small'>Password</label>
            <input
              className='form-control'
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              onFocus={OnFocusInput}
              onBlur={OnFocusOutInput}
            />
            {

              inputFocus ?
                <div className='PCL'>
                  <PasswordChecklist
                    rules={["minLength", "specialChar", "number", "capital", "lowercase"]}
                    minLength={8}
                    value={formValues.password}
                    messages={{
                      minLength: " Password has more than 8 characters ",
                      specialChar: " password has a special characters ",
                      number: "password has a number.",
                      capital: "password has a capital letter.",
                      lowercase: "password has a lower case letter.",
                    }} />
                </div>

                : null

            }

          </div>
          <p className='text-danger'>{formErrors.password}</p>
          <a className='FP'>Forget Password</a>
          <button className="fluid btn btn-primary">Submit</button>
          <a href='/Register' className='registerbutton'>NewAccount ?</a>
        </form>
      </div>
    </div>

  );

}

export default Login
