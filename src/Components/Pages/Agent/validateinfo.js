export default function validateinfo(values) {
  let error = {};

  if (!values.name.trim()) {
    error.name = "Name required!";
  }
  if (!values.companyname.trim()) {
    error.companyname = "Company Name required!";
  }
  if (!values.address.trim()) {
    error.address = "Address required!";
  }
  if (!values.postcode.trim()) {
    error.postcode = "Postcode required!";
  }
  if (!values.state.trim()) {
    error.state = "State required!";
  }
  if (!values.area.trim()) {
    error.area = "Area required!";
  }
  if (values.country === "") {
    error.country = "Country required!";
  }
  if (values.whatsappno === "") {
    error.whatsappno = "Whatsapp Number required!";
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
