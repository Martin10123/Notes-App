import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { removeErrorAction, setErrorAction } from "../../actions/ui";
import { startRegisterData } from "../../actions/auth";

const RegisterSreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [registerForm, handleRegisterChange] = useForm({
    name: "Violeta",
    email: "violeta@gmail.com",
    password: 1234567,
    password2: 1234567,
  });

  const { name, email, password, password2 } = registerForm;

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterData(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length < 2) {
      dispatch(setErrorAction("name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction("email is required"));
      return false;
    } else if (password !== password2 || password.length < 6) {
      dispatch(setErrorAction("password is required mayor a 6"));
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form
        onSubmit={handleSubmitRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          autoComplete="off"
          type="text"
          placeholder="Name..."
          name="name"
          className="auth__input"
          value={name}
          onChange={handleRegisterChange}
        />
        <input
          autoComplete="off"
          type="text"
          placeholder="Email..."
          name="email"
          className="auth__input"
          value={email}
          onChange={handleRegisterChange}
        />
        <input
          type="password"
          placeholder="Password..."
          name="password"
          className="auth__input"
          value={password}
          onChange={handleRegisterChange}
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleRegisterChange}
        />
        <button type="submit" className="btn btn-primary btn_block mb-5">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Aready registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterSreen;
