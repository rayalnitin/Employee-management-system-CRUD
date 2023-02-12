import * as types from "../constants/actionTypes";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.DELETE_USER,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
});

const editUser = (user) => ({
  type: types.GET_SINGLE_USER , 
  payload : user
})

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/demoData`)
      .then((response) => {
        console.log(response.data);
        dispatch(getUsers(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
  console.log("User to be deleted", id);
  return function (dispatch) {
        axios
            .delete(`http://localhost:5000/demoData/${id}`)
            .then((response)=>{
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
            .catch((error=>{
              console.log("Error"  , error)
            }))
  };
};

export const addUser = (formData) => {
  return function (dispatch) {
        axios
            .post(`http://localhost:5000/demoData` , formData)
            .then((response)=>{
                dispatch(userAdded())
                dispatch(loadUsers())
            })
            .catch((error=>{
              console.log("Error"  , error)
            }))
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:5000/demoData/${id}`)
      .then((response) => {
        console.log("resp" , response)
        dispatch(editUser(response.data))
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


export const updateUser = (user ,  id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:5000/demoData/${id}` ,  user)
      .then((response) => {
        console.log("resp" , response)
        dispatch(userUpdated())
      })
      .catch((error) => {
        console.log(error);
      });
  };
};