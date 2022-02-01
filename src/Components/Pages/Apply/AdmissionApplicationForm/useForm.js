import axios from "axios";
import { useEffect, useState } from "react";

const useForm = (props) => {
  const [values, setValues] = useState({
    profilephoto: "",
    fName: "",
    lName: "",
    passportno: "",
    passportExpireDate: "",
    nationality: "",
    nID_birthNumber:"",
    gender: "",
    dateofbirth: "",
    placeofbirth: "",
    maritalstatus: "",
    email: "",
    phone: "",
    homeaddress: "",
    homephone: "",
    applyuniveristy: "",
    majorsub: "",
    profession: "",
    language: "",
    fathername: "",
    mothername: "",
    fatheremployement: "",
    motheremployement: "",
    fathernumber: "",
    mothernumber: "",
    passportscan: "",
    nIDscan: "",
    academiccertificate: "",
    academiccertificate2: "",
    academiccertificate3: "",
    academiccertificate4: "",
    academiccertificate5: "",
    transcript: "",
    transcript2: "",
    transcript3: "",
    transcript4: "",
    transcript5: "",
    bankstatement: "",
    recommendationletter: "",
    recommendationletter2: "",
    recommendationletter3: "",
    studyplan: "",
    base_url:props.base_url,
  });
  const [error, setErrors] = useState({});
  const [count, setCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name",name,value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  const headers = {
    
    'content-type': 'multipart/form-data'
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    console.log("values",values);
    Object.keys(values).map((v,i)=>{
      console.log("v> ", v, "| value: ", values[v]);
      return formdata.append(v, values[v])});
    console.log("Form Data",formdata);
    // setErrors(validate(values));
    setIsSubmitting(true);
    console.log("Neww",props.base_url);
    axios.post(props.base_url+"/form/admissionpost/", formdata, {
      headers: headers
    })
    .then((response) => {
      console.log(response.data);
      alert("Submitted Successfull");
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

  return { handleChange, values, count, handleSubmit, error, setValues,setCount};
};

export default useForm;
