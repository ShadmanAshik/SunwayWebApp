export default function validateinfo(values) {
  let error = {};

  if (!values.name.trim()) {
    error.name = "Name required!";
  }

  if (values.degreeObtained === "") {
    error.degreeObtained = "Value for Degree required!";
  }
  if (values.englishProficiency === "") {
    error.englishProficiency = "Value for English Proficiency required!";
  }
  if (values.levelofstudy === "") {
    error.levelofstudy = "Value for level required!";
  }
  if (!values.fieldofstudy.trim()) {
    error.fieldofstudy = "Name required!";
  }
  if (values.avgGrade === "") {
    error.avgGrade = "Average Grade Required!";
  }
  if (values.studyBudget === "") {
    error.studyBudget = "Average Grade Required!";
  }
  if (values.nationality === "") {
    error.nationality = "Nationality required!";
  }
  if (values.dateofbirth === "") {
    error.dateofbirth = "Date of birth required!";
  }
  if (!values.email) {
    error.email = "Email Required!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "Email address is invalid!";
  }
  if (!values.phoneno.trim()) {
    error.phoneno = "Phone number required!";
  }
  return error;
}
