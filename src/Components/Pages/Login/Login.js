import React, {useState} from 'react'
import LoginForm from './LoginForm'
import FormSuccess from "./FormSuccess";
import "./Login.css"

export default function Login() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }
    return (
      <>
        <div className="form-container-login">
          {!isSubmitted ? (
            <LoginForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    );
}
