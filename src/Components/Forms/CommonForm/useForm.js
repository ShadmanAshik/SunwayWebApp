import axios from "axios";
import { useEffect, useState } from "react";
const useForm = (props, validate) => {
  const [values, setValues] = useState({
    email: "",
    fName: "",
    lName: "",
    phone: "",
    counselingMode: "",
    studyLevel: "",
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
  const headers = {
    'Content-Type': 'application/json',
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    axios.post('http://127.0.0.1:8000/cfd/contactformdata/', values, {
      headers: headers
    })
    .then((response) => {
      console.log(response.data);
      alert("Form Submitted.");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error)
    })
  };



  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      
    }
  });
  return { handleChange, values, handleSubmit, error,setValues };
};

export default useForm;
