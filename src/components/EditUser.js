import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate , useParams } from "react-router-dom";
import { getSingleUser, updateUser } from "../redux/actions/actions";
import "./AddUser.css";

function EditUser() {

    let dispatch = useDispatch();
    const navigate = useNavigate();
    let { id } = useParams();
    const {user} = useSelector((state)=>state.data)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: " ",
    email: " ",
    salary: " ",
    date: " ",
  });

  useEffect(()=>{
    dispatch(getSingleUser(id))
  },[])

  useEffect(()=>{
    setFormData({...user})
  },[user])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData , id));
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
      <Link to="/">
        <button className="home__button">Home</button>
      </Link>

      <h2>Edit Current User</h2>
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
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name = "email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Salary"
          value={formData.salary}
          name="salary"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={formData.date}
          name="date"
          onChange={handleChange}
          required
        />
        <button className="user_button">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
