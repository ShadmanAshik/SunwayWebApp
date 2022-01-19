import axios from "axios";
import { useEffect, useState } from "react";

const useForm = (props, validate) => {
  const [values, setValues] = useState({
  
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
  
  const hireTutorhandleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    axios.post(values.baseurl+"form/looktutor/", values, {
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
  const tutorReghandleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    axios.post(values.baseurl+"form/betutor/", values, {
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

  return { handleChange, values, tutorReghandleSubmit, hireTutorhandleSubmit, error, setValues};
};

export default useForm;
