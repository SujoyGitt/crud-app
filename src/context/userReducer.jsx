// Reducer manages all state updates and localStorage persistence
export const userReducer = (state, action) => {
  switch (action.type) {
    // Update single form field
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };

    // Set entire form data (used during edit)
    case "SET_FORM_DATA_BULK":
      return {
        ...state,
        formData: action.payload,
      };

    // Clear form after submit
    case "RESET_FORM":
      return {
        ...state,
        formData: {
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
        },
        isEditing: false,
      };

    // Set users list from API
    case "SET_USERS":
      return { ...state, users: action.payload };

    // Add new user
    case "ADD_USER": {
      const newUsersList = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(newUsersList));
      return { ...state, users: newUsersList };
    }

    // Update existing user
    case "UPDATE_USER": {
      const updatedUsersList = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsersList));
      return { ...state, users: updatedUsersList, isEditing: false };
    }

    // Delete user
    case "DELETE_USER": {
      const filteredUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      return { ...state, users: filteredUsers };
    }

    case "SET_EDITING":
      return { ...state, isEditing: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
