import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBriefcase,
  FaMapMarkerAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import FormInput from "@components/FormInput";
import Button from "@components/Button";
import { login, register, toggleForm } from "@app/reducers/authSlice";
import { useNavigate } from "react-router-dom";

function Auth() {
  const dispatch = useDispatch();
  const { isRegister, accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // const [user, setUser] = useState({
  //   profilePic: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   occupation: "",
  //   location: "",
  // });

  // const handleInpChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleImgChange = (event) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     profilePic: event.target.files[0],
  //   }));
  // };

  const loginInput = [
    {
      label: "Email",
      type: "text",
      name: "email",
      icon: <FaEnvelope />,
      errorMessage: "Invalid Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      icon: <FaLock />,
      errorMessage: "Invalid Password",
      password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd!@#$%^&*()-_=+]{8,20}$",
    },
  ];

  const registerInput = [
    {
      label: "Username",
      type: "text",
      name: "username",
      icon: <FaUser />,
      errorMessage: "Invalid Username",
      pattern: "^(?=[A-Z])(?=[A-Za-z0-9 ]{2,20}$)[A-Za-z0-9 ]*$",
    },
    {
      label: "Occupation",
      type: "text",
      name: "occupation",
      icon: <FaBriefcase />,
      errorMessage: "Invalid Occupation",
      pattern: "^[a-zA-Z0-9 ,]{2,50}$",
    },
    {
      label: "Location",
      type: "text",
      name: "location",
      icon: <FaMapMarkerAlt />,
      errorMessage: "Invalid Location",
      pattern: "^[a-zA-Z0-9 ,]{2,50}$",
    },
    {
      label: "Email",
      type: "text",
      name: "email",
      icon: <FaEnvelope />,
      errorMessage: "Invalid Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      icon: <FaLock />,
      errorMessage: "Invalid Password",
      password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd!@#$%^&*()-_=+]{8,20}$",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = new FormData(event.target);
    // Object.entries(user).forEach(([name, value]) => {
    //   userData.append(name, value);
    // });
    if (!isRegister) {
      dispatch(register(userData));
    }
    await dispatch(login(userData));
    navigate("/");
  };

  // conditionally rendering of register or login form
  const INPUTS = isRegister ? loginInput : registerInput;

  return (
    <main className="login">
      <form
        method="POST"
        encType="multipart/form-data"
        className="container form"
        onSubmit={handleSubmit}
      >
        <h1>{isRegister ? "Login" : "Register"}</h1>
        {!isRegister && (
          <input
            type="file"
            id="profile"
            name="profilePic"
            required={true}
            // onChange={handleImgChange}
          />
        )}

        {INPUTS.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            // value={user[input.name]}
            // onChange={handleInpChange}
          />
        ))}
        <Button
          type="submit"
          label={isRegister ? "SignIn" : "SignUp"}
          icon={isRegister ? <FaSignInAlt /> : <FaUserPlus />}
          className="button"
        />
        <button onClick={() => dispatch(toggleForm())}>
          {isRegister
            ? "Dont have account? Register"
            : "Already have account? Login"}
        </button>
      </form>
    </main>
  );
}

export default Auth;
