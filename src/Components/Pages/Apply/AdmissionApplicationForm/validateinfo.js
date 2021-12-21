export default function validateinfo(values) {
  let error = {};

  if (!values.name.trim()) {
    error.name = "Required!";
  }
  if (!values.passportno.trim()) {
    error.passportno = "Required!";
  }
  if (values.passportExpireDate === "") {
    error.passportExpireDate = "Required!";
  }
  if (!values.nationality.trim()) {
    error.nationality = "Required!";
  }
  if (!values.religion.trim()) {
    error.religion = "Required!";
  }
  if (values.gender === "") {
    error.gender = "Required!";
  }
  if (values.dateofbirth === "") {
    error.dateofbirth = "Required!";
  }
  if (!values.placeofbirth.trim()) {
    error.placeofbirth = "Required!";
  }
  if (values.maritalstatus === "") {
    error.maritalstatus = "Required!";
  }
  if (!values.email.trim()) {
    error.email = "Required!";
  }
  if (!values.phoneno.trim()) {
    error.phoneno = "Required!";
  }
  if (!values.homeaddress.trim()) {
    error.homeaddress = "Required!";
  }
  if (!values.applyuniveristy.trim()) {
    error.applyuniveristy = "Required!";
  }
  if (!values.majorsub.trim()) {
    error.majorsub = "Required!";
  }
  if (!values.institutename.trim()) {
    error.institutename = "Required!";
  }
  if (!values.fieldofstudy.trim()) {
    error.fieldofstudy = "Required!";
  }
  if (values.startdate === "") {
    error.startdate = "Required!";
  }
  if (values.enddate === "") {
    error.enddate = "Required!";
  }
  if (!values.cgpa.trim()) {
    error.cgpa = "Required!";
  }
  if (!values.institutename2.trim()) {
    error.institutename2 = "Required!";
  }
  if (!values.fieldofstudy2.trim()) {
    error.fieldofstudy2 = "Required!";
  }
  if (values.startdate2 === "") {
    error.startdate2 = "Required!";
  }
  if (values.enddate2 === "") {
    error.enddate2 = "Required!";
  }
  if (!values.cgpa2.trim()) {
    error.cgpa2 = "Required!";
  }
  if (!values.profession.trim()) {
    error.profession = "Required!";
  }
  if (!values.language.trim()) {
    error.language = "Required!";
  }
  if (!values.fathername.trim()) {
    error.fathername = "Required!";
  }
  if (!values.mothername.trim()) {
    error.mothername = "Required!";
  }
  if (!values.fatherage.trim()) {
    error.fatherage = "Required!";
  }
  if (!values.motherage.trim()) {
    error.motherage = "Required!";
  }
  if (!values.fatheremployement.trim()) {
    error.fatheremployement = "Required!";
  }
  if (!values.motheremployement.trim()) {
    error.motheremployement = "Required!";
  }
  if (!values.fathernumber.trim()) {
    error.fathernumber = "Required!";
  }
  if (!values.mothernumber.trim()) {
    error.mothernumber = "Required!";
  }
  return error;
}
