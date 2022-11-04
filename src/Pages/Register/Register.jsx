import React,{useState} from 'react'
import './Register.css'
import PasswordChecklist from "react-password-checklist"

function Register() {
    const initialValues = { fristName:"",lastName:"",email:"",  userName: "",  password: "" ,confirmPassword:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [inputFocus, setInputFocus]=useState(false)
    const [inputFocus1, setInputFocus1]=useState(false)
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
        const emailRegex= new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]{2,}")

        //User Name validation
        if (!values.userName) {
          errors.userName = "Username is required!";
        }
        else{
          setIsUsername(true)
        }

        //email validation
        if(!values.email){
            errors.email="Email is required"
        }
        else if(!emailRegex.test(values.email)){
            errors.email="Invalid email address"
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
        <div className="Registerpage">
          {
            isUserName && isPassword?<h1 className='text-success'>Register Success</h1>: isSubmit?<h1 className='text-danger'>Register failed</h1>:null
          }
          <form onSubmit={handleSubmit}>
            <h1>Register Form</h1>
            <hr/>
            <div className="form-group">
                <label className='form-label' >fristName</label>
                <input
                 className='form-control'
                  type="text"
                  name="fristName"
                  placeholder="fristName"
                  value={formValues.fristName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className='form-label' >lastName</label>
                <input
                 className='form-control'
                  type="text"
                  name="lastName"
                  placeholder="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className='form-label' >email</label>
                <input
                 className='form-control'
                  type="email"
                  name="email"
                  placeholder="Username"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p className='text-danger'>{formErrors.email}</p>

              <div className="form-group">
                <label className='form-label' >Username</label>
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
              <div className="form-group">
                <label className='form-label'>Confirm Password</label>
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
      );
}

export default Register
