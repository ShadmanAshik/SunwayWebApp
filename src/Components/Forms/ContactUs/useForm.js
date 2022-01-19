import axios from "axios";
import { useEffect, useState } from "react";

const useForm = (props, validate) => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    message: "",
    phone: "",
    baseurl: props.base_url,
  });
  console.log("=====> Values.baseurl",values.baseurl);
 
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
    axios.post(values.baseurl+"form/contactus/", values, {
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
      alert("Submitted Successfull")
    }
  }, [error]);

  return { handleChange, values, handleSubmit, error, setValues};
};

export default useForm;
