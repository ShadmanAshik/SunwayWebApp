export default function LogInValidateinfo(values) {
  let error = {};
  if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = <i class="fas fa-circle"></i>;
  }
  if (values.confirmPassword !== values.signupPassword) {
    error.confirmPassword = <i class="fas fa-circle"></i>;
  }
  return error;
}