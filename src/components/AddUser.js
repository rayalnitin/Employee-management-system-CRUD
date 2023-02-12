import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../redux/actions/actions";
import "./AddUser.css";

function AddUser() {

    let dispatch = useDispatch();
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: " ",
    email: " ",
    salary: " ",
    date: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    navigate('/ ')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div>
      <button className="home__button" onClick={() => navigate('/')}>Home</button>
      <h2>Add New User</h2>
      <form className="user__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Email"
          name = "email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Salary"
          name="salary"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          placeholder="Date"
          name="date"
          onChange={handleChange}
          required
        />
        <button className="user_button">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
