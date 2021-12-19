import { useState, useEffect } from "react";

const UseForm = (callback, validate) => {
  const [values, setValues] = useState({
    group: "",
    loginPassword: "",
    signupPassword: "",
    confirmPassword: "",
    email: "",
    country: "",
    name: "",
    phoneno: "",
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
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
    }
  }, [error]);

  return { handleChange, values, handleSubmit, error };
};

export default UseForm;

