import axios from "axios";
import { useEffect, useState } from "react";

const useForm = (props, validate) => {
  const [values, setValues] = useState({
    email: "",
    fName: "",
    lName: "",
    phone: "",
    counselingMode: "",
    studylevel: "",
    countryCode:""
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
    axios.post('http://localhost:8080/cfd/contactformdata/', values, {
      headers: headers
    })
    .then((response) => {
      console.log(response.data);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error)
    })
  };



  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      
    }
  }, [error]);

  return { handleChange, values, handleSubmit, error };
};

export default useForm;
