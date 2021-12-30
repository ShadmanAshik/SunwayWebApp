import { useState, useEffect } from "react";
import axios from "axios"
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    fname: "",
    lname: "",
    countryCode: "",
    phoneno: "",
    counselMode: "",
    Studylevel: "",
    country:""
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
  
  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    
  };
  const headers = {
    'Content-Type': 'application/json',
    
  }
  
  axios.post('http://127.0.0.1:8000/contactformdata/', values, {
      headers: headers
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      console.log("use -- effect");
    }
  });

  return { handleChange, values, handleSubmit, error };
};

export default useForm;
