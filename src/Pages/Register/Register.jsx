import React,{useState} from 'react'
import './Register.css'
import PasswordChecklist from "react-password-checklist"
import {Link,useNavigate} from 'react-router-dom'
import { BiUser } from "react-icons/bi"
import { FiLock } from "react-icons/fi"
import{MdEmail} from "react-icons/md"
import vijay from "../../Assets/Images/vj.jpg"
import bgimg from "../../Assets/Images/supermarket.jpg"
import User from '../../DummyData/User'

function Register() {
    const initialValues = { firstName:"",lastName:"", userName:"",  password: "" ,confirmPassword:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [inputFocus, setInputFocus]=useState(false)
    const [inputFocus1, setInputFocus1]=useState(false)
    let isUserName=false;
    let isPassword=false;
    let isFirstName=false;
    let isLastName=false;

    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        
      };

      const validate = (values) => {
        const errors = {};
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");//password 
        const userNameRegex= new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]{2,}")
        const rule = /^[a-zA-Z ]{3,40}$/;

        //first name validation
        if(!values.firstName){
          errors.firstName="first name is required"
        }
        else if(!rule.test(values.firstName)){
          errors.firstName="first name must be contain atlist 3 characters and only alphabets"
        }
        else{
          isFirstName=true
        }

       // last name validation
       if(!values.lastName){
        errors.lastName="last name is required"
       }
       else if (!rule.test(values.lastName)){
        errors.lastName="last name must be contain atlist 3 characters and only alphabets"
       }
       else{
        isLastName=true
       }


        //userName alias email validation
        if(!values.userName){
            errors.userName="userName is required"
        }
        else if(!userNameRegex.test(values.userName)){
            errors.userName="Invalid userName address"
        }
        else{
          isUserName=true
        }

        //password validation
        if (!values.password) {
          errors.password = "Password is required";
        } 
        else if(!strongRegex.test(values.password)){
          errors.password="invalide Password"
        } 
        else if(values.password!==values.confirmPassword){
            errors.confirmPassword="password  didn't match"
        }
        else{
          isPassword=true
        }

        //navigate
        if(isUserName&&isPassword&&isFirstName&&isLastName){
          alert("Register success")
          User.push(formValues)
          navigate('/')
        }
       else{
        alert("Register failed")
       }

        return errors;
      };
  
      const OnFocusInput=() =>{
        setInputFocus(true)
        
      }
      const OnFocusOutInput=() =>{
        setInputFocus(false)
       
      }



    return (
       <div className="Registerpagecontainer">
         <img className='bgimg' src={bgimg}/>
         <div className="Registerpage">
         <div className='Registerpageleft'>
          <h1>Vijay super market</h1>
          <small>is a delight for everyone </small>
        </div>
          <form onSubmit={handleSubmit}>
          <div className="vijaylogo">
          <img src={vijay} />
          </div>
            <hr/>
            <div className="form-group">
            <label className='form-label small' >FirstName</label>
                <input
                 className='form-control'
                  type="text"
                  name="firstName"
                  placeholder="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </div>
              <p className='text-danger'>{formErrors.firstName}</p>
              <br/>
              <div className="form-group">
                <label className='form-label small' >LastName</label>
                <input
                 className='form-control'
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </div>
              <p className='text-danger'>{formErrors.lastName}</p>
              <br/>
              <div className="form-group">
                <MdEmail/>
                <label className='form-label small' >Username</label>
                <input
                 className='form-control'
                  type="email"
                  name="userName"
                  placeholder="Username must be Email Id"
                  value={formValues.userName}
                  onChange={handleChange}
                />
              </div>
              <p className='text-danger'>{formErrors.userName}</p>
             
              <div className="form-group">
                <FiLock/>
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
                <PasswordChecklist
                rules={["minLength","specialChar","number","capital","lowercase"]}
                minLength={8}
                value={formValues.password}
                messages={{
                  minLength: " Password has more than 8 characters ",
                  specialChar: " password has a special characters ",
                  number: "password has a number.",
                  capital: "password has a capital letter.",
                  lowercase: "password has a lower case letter.",
                }}
              />:null
                }
              </div>
              <p className='text-danger'>{formErrors.password}</p>
              <div className="form-group">
                <FiLock/>
                <label className='form-label small'>Confirm Password</label>
                <input
                  className='form-control'
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  onFocus={()=>setInputFocus1(true)}
                onBlur={()=>setInputFocus1(false)}
                />
                { 
                inputFocus1 ?
                <PasswordChecklist
                rules={["match"]}
                minLength={8}
                value={formValues.confirmPassword}
                valueAgain={formValues.password}
                messages={{
                  match:"Password match"
                }}
              />:null
                }
              </div>
              <p className='text-danger'>{formErrors.confirmPassword}</p>
              <button className="fluid btn btn-primary">Submit</button>
            
          </form>
        </div>
       </div>
       
      );
}

export default Register
