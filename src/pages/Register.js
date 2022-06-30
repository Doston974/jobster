import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import { loginUser, registerUser } from "../features/user/userSlice";
import "../style/Register.css";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={onSubmit}>
        <div className="flex justify-center mx-auto">
          <Logo />
        </div>
        <h3 className="text-3xl font-semibold text-center my-4">
          {values.isMember ? "Login" : "Register"}
        </h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button
          className="bg-[#22b8f1] text-white w-full rounded p-1 mt-8 my-4 text-xl hover:bg-[#0ca5d4]"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <button
          onClick={() =>
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            )
          }
          className="bg-[#b4e95e] text-white w-full rounded p-1 text-xl mb-2 hover:bg-[#7cbf10]"
          disabled={isLoading}
          type="button"
        >
          {isLoading ? "Loading..." : "Demo App"}
        </button>
        <p className="text-black font-semibold text-center">
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            className="text-[#22b8f1] font-semibold ml-2 "
            type="button"
            onClick={toggleMember}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
