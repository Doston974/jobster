import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRow from "../../components/FormRow";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userDate, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userDate;
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(updateUser(userDate))
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userDate, [name]: value });
  };

  return (
    <div className="bg-white rounded drop-shadow-xl overflow-hidden">
      <form onSubmit={handleSubmit}>
        <h3 className="text-3xl font-medium m-8 ">Profile</h3>
        <div className="form-center font-medium grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 p-4">
          <FormRow
            type="text"
            name="name"
            value={userDate.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            value={userDate.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            value={userDate.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            value={userDate.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block bg-[#22b7f0] text-white capitalize rounded h-[34px] mt-11 tracking-wider" disabled={isLoading}>
             {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
