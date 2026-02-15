import { createContext, useReducer, useEffect } from "react";
import { userReducer } from "./userReducer";
import * as api from "../api/userService";

export const UserContext = createContext();

const initialState = {
  users: [],
  loading: true,
  isEditing: false,
  formData: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  },
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Fetch users on component mount
  const fetchUsers = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const data = await api.getUsers();
      dispatch({ type: "SET_USERS", payload: data });
    } catch (err) {
      console.error("Failed to load users", err);
    }
    dispatch({ type: "SET_LOADING", payload: false });
  };

  // Add new user
  const addUser = async (user) => {
    try {
      const newUser = await api.createUser(user);
      dispatch({ type: "ADD_USER", payload: newUser });
    } catch (err) {
      alert(err.message);
    }
  };

  // Update existing user
  const updateUser = async (id, user) => {
    const updated = await api.updateUser(id, user);
    dispatch({ type: "UPDATE_USER", payload: updated });
  };

  // Delete user
  const removeUser = async (id) => {
    await api.deleteUser(id);
    dispatch({ type: "DELETE_USER", payload: id });
  };

  // Load users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        addUser,
        updateUser,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
