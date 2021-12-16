import React from "react";
import "./Login.css";
import validate from "./validateinfo";
import LogInUseForm from "./LogInUseForm";
import { Link } from "react-router-dom";

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, error } = LogInUseForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-login">
      <form className="form-login" onSubmit={handleSubmit}>
        <h1>
          Dont Have An Account? <u> <Link to='/SignUp'> Sign Up.</Link></u> 
        </h1>
        <div className="form-inputs-login">
          <label htmlFor="group" className="form-label-login">
            Group:
          </label>
          <select
            id="group"
            type="text"
            name="group"
            className="form-input-login"
            value={values.loginType}
            onChange={handleChange} >
            <option value=""></option>
            <option value="Admin">Admin</option>
            <option value="Agent">Agent</option>
          </select>
          {error.group && <p>{error.group}</p>}
        </div>

        <div className="form-inputs-login">
          <label htmlFor="userID" className="form-label-login">
            User ID:
          </label>
          <input
            id="userID"
            type="text"
            name="userID"
            className="form-input-login"
            placeholder="e.g. #69420"
            value={values.userID}
            onChange={handleChange}
          />
          {error.userID && <p>{error.userID}</p>}
        </div>
        <div className="form-inputs-login">
          <label htmlFor="userPassword" className="form-label-login">
            Password:
          </label>
          <input
            id="userPassword"
            type="password"
            name="userPassword"
            className="form-input-login"
            placeholder="Input provided password"
            value={values.userPassword}
            onChange={handleChange}
          />
          {error.userPassword && <p>{error.userPassword}</p>}
        </div>
        <button className="form-input-apply-login" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
