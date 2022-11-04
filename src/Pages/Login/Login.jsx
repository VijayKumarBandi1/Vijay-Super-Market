import React,{useState,useEffect} from 'react'
import './Login.css'
import PasswordChecklist from "react-password-checklist"


function Login() {
    const initialValues = { userName: "",  password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [inputFocus, setInputFocus]=useState(false)
    const[isUserName,setIsUsername]=useState(false)
    const[isPassword, setIsPassword]=useState(false)
    const[isSubmit, setIsSubmit]=useState(false)

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true)
    };
  
    
    const validate = (values) => {
      const errors = {};
      const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     
      if (!values.userName) {
        errors.userName = "Username is required!";
      }
      else{
        setIsUsername(true)
      }
      if (!values.password) {
        errors.password = "Password is required";
      } 
      else if(!strongRegex.test(values.password)){
        errors.password="invalide Password"
      } 
      else{
        setIsPassword(true)
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
      <div className="Loginpage">
        {
          isUserName && isPassword?<h1 className='text-success'>Login Success</h1>: isSubmit?<h1 className='text-danger'>Login failed</h1>:null
        }
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <hr/>
            <div className="form-group">
              <label className='form-label' >Username</label>
              <input
               className='form-control'
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.userName}
                onChange={handleChange}
              />
            </div>
            <p className='text-danger'>{formErrors.userName}</p>
           
            <div className="form-group">
              <label className='form-label'>Password</label>
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
            <button className="fluid btn btn-primary">Submit</button>
          
        </form>
      </div>
    );
  
}

export default Login
