import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, loadUsers } from "../redux/actions/actions";
import "./Home.css";

function Home() {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      dispatch(deleteUser(id))
    }
  };

  console.log(users);

  return (
    <>
    
    <button className="new__action" onClick={() => navigate('/addUser')}>Add User</button>
   
     <div className="table__container">
      <div className="table">
        <div className="column__name">First Name</div>
        <div className="column__name">Last Name</div>
        <div className="column__name">Email</div>
        <div className="column__name">Salary</div>
        <div className="column__name">Date</div>
        <div className="column__name">Action</div>
      </div>
      {users &&
        users.map((item) => {
          return (
            <div className="">
              <div className="user__table">
                <div className="user__first">{item.firstName}</div>
                <div className="user__last">{item.lastName}</div>
                <div className="user__email">{item.email}</div>
                <div className="user__salary">{item.salary}</div>
                <div className="user__date">{item.date}</div>
                <div className="user__actions">
                <button className="edit__action" onClick={() => navigate(`/editUser/${item.id}`)}>Edit</button>
                <button
                  className="delete__action"
                  onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
              </div>
              
            </div>
          );
        })}
    </div>
    </>
  );
}

export default Home;
