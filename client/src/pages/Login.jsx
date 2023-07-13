import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBriefcase,
  FaMapMarkerAlt,
  FaSignInAlt,
  FaUserPlus,
  FaImage,
} from "react-icons/fa";
import FormInput from "@components/FormInput";
import Button from "@components/Button";
import { register } from "@app/reducers/authSlice";

function Login() {
  const dispatch = useDispatch();
  const { isSignUp, message } = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    profilePic: "",
    username: "",
    email: "",
    password: "",
    occupation: "",
    location: "",
  });

  const handleInpChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImgChange = (event) => {
    setUser((prev) => ({
      ...prev,
      profilePic: event.target.files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register());
    console.log(user);
  };

  const singUpInputs = [
    {
      label: "Username",
      type: "text",
      name: "username",
      icon: <FaUser />,
      errorMessage: "Invalid Username",
      pattern: "^[a-zA-Z][a-zA-Z0-9_]{2,19}$",
    },
    {
      label: "Occupation",
      type: "text",
      name: "occupation",
      icon: <FaBriefcase />,
      errorMessage: "Invalid Occupation",
      pattern: "^[a-zA-Z0-9s]{2,50}$",
    },
    {
      label: "Location",
      type: "text",
      name: "location",
      icon: <FaMapMarkerAlt />,
      errorMessage: "Invalid Location",
      pattern: "^[a-zA-Z0-9s]{2,50}$",
    },
    {
      label: "Email",
      type: "text",
      name: "email",
      icon: <FaEnvelope />,
      errorMessage: "Invalid Email",
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      icon: <FaLock />,
      errorMessage: "Invalid Password",
      password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$",
    },
  ];

  const signInInput = [
    {
      label: "Email",
      type: "text",
      name: "email",
      icon: <FaEnvelope />,
      errorMessage: "Invalid Email",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      icon: <FaLock />,
      errorMessage: "Invalid Password",
    },
  ];

  const INPUTS = isSignUp ? signInInput : singUpInputs;

  return (
    <main className="login">
      <form
        action={isSignUp ? "/auth/register" : "/auth/login"}
        method="POST"
        encType="multipart/form-data"
        className="container form"
        onSubmit={handleSubmit}
      >
        <h1>{isSignUp ? "Login" : "Register"}</h1>

        <input
          type="file"
          id="profile"
          name="profilePic"
          required={true}
          onChange={handleImgChange}
        />
        <label htmlFor="profile" className="profileLabel" tabIndex={0}>
          <span className="label">Select Profile Pic</span>
          <span className="icon">
            <FaImage />
          </span>
        </label>
        {INPUTS.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            value={user[input.name]}
            onChange={handleInpChange}
          />
        ))}
        <Button
          type="submit"
          label={isSignUp ? "SignIn" : "SignUp"}
          icon={isSignUp ? <FaSignInAlt /> : <FaUserPlus />}
          className="button"
        />
      </form>
    </main>
  );
}

export default Login;
