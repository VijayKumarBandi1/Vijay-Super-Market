import React,{useState,useEffect} from 'react'
import './Login.css'


function Login() {
    const initialValues = { username: "",  password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (formErrors.length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } 
      else if(!strongRegex.test(values.password)){
        errors.password="invalide Password"
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
  
    return (
      <div className="container1">
        {formErrors.length === 0 && isSubmit ? (
          <div style={{color : "green"}}>Signed in successfully</div>
        ) : null
        }
  
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          
            <div className="form-group">
              <label >Username</label>
              <input
               className='form-control'
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p style={{color : "red"}}>{formErrors.username}</p>
           
            <div className="form-group">
              <label>Password</label>
              <input
                className='form-control'
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                
              />
            </div>
            <p style={{color : "red"}}>{formErrors.password}</p>
            <button className="fluid ui button blue">Submit</button>
          
        </form>
      </div>
    );
  
}

export default Login
