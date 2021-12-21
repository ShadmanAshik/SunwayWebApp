import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    gender: "",
    degreeObtained: "",
    englishProficiency: "",
    avgGrade: "",
    studyBudget: "",
    nationality: "",
    dateofbirth: "",
    email: "",
    phoneno: "",
    levelofstudy: "",
    fieldofstudy: "",
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

export default useForm;
