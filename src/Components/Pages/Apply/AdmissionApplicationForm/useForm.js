import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    photo: "",
    name: "",
    passportno: "",
    passportExpireDate: "",
    nationality: "",
    religion: "",
    gender: "",
    dateofbirth: "",
    placeofbirth: "",
    maritalstatus: "",
    email: "",
    phoneno: "",
    homeaddress: "",
    homephone: "",
    applyuniveristy: "",
    majorsub: "",
    institutename: "",
    fieldofstudy: "",
    startdate: "",
    enddate: "",
    cgpa: "",
    institutename2: "",
    fieldofstudy2: "",
    startdate2: "",
    enddate2: "",
    cgpa2: "",
    profession: "",
    language: "",
    fathername: "",
    mothername: "",
    fatherage: "",
    motherage: "",
    fatheremployement: "",
    motheremployement: "",
    fathernumber: "",
    mothernumber: "",
    wherehearaboutus: "",
    passportscan: "",
    academiccertificate: "",
    transcript: "",
    transcript2: "",
    policyclearance: "",
    bankstatement: "",
    bankstatement2: "",
    englishprofeciencydoc: "",
    otherdoc: "",
    recommendationletter: "",
    recommendationletter2: "",
    recommendationletter3: "",
    studyplan: "",
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
