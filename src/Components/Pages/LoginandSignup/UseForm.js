
import axios from "axios";
import { useEffect, useState } from "react";

const UseForm = (props, validate) => {
  const [values, setValues] = useState({
    group: "",
    loginPassword: "",
    signupPassword: "",
    confirmPassword: "",
    email: "",
    country: "",
    name: "",
    phoneno: "",
    is_authenticated: "",
    base_url: props.base_url,
    access_token: "",
    reg_log: ""
  });
  const [error, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("=====> e: ", e);
    console.log("====> reg-log: ", document.getElementById("reg-log"));
    setErrors(validate(values));
    setIsSubmitting(true);

    let data = {
      // 'is_agent': values.group == "User" ? false : true,
      'email': values.email,
      'password': values.loginPassword
    };


    axios.post(values.base_url+"/accounts/token/login/", data)
      .then((res)=>{
        localStorage.setItem('auth_token', res.data.auth_token);
        let config = {
          'headers': {
            'Authorization': "Token "+localStorage.getItem('auth_token')
          }
        };
        axios.get(
          values.base_url+"/accounts/users/me/", 
          config
        ).then((res)=>{
          localStorage.setItem(
            'user_type', res.data.is_agent? "Agent" : (res.data.is_student ? "Student" :(res.data.is_admin? "Admin":false))
          );
          setValues({
            ...values, 
            'is_authenticated': true, 
            'auth_token': localStorage.getItem('auth_token'), 
            'group': localStorage.getItem('user_type')
          })
        }).catch((error)=>{ 
            localStorage.setItem('auth_token', undefined);
            localStorage.setItem('user_type', undefined);
            setValues({
              ...values,
              'group': undefined,
              'is_authenticated': undefined
            });
          });
  
      }).catch((err)=>{console.log("errors: ", err);});
      
    console.log("==> axios called finished!");
  };   
  const signupSubmit = (e) => {
    e.preventDefault();
    
    setErrors(validate(values));
    setIsSubmitting(true);

    let data = {
      'is_student': true, 
      'email': values.email,
      'password': values.signupPassword,
      're_password': values.confirmPassword,
      'name': values.name
    };


    axios.post(values.base_url+"/accounts/users/", data)
      .then((res)=>{
        alert("Registration Complete!")
        window.location.reload();
  
      }).catch((err)=>{console.log("errors: ", err);});
      
    console.log("==> axios called finished!");
  };   

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      console.log("use -- effect");
    }
  });

  return { handleChange, values, loginSubmit, signupSubmit, error };
};

export default UseForm;