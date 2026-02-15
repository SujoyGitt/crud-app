import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const UserForm = () => {
  const [error, setError] = useState("");
  const { state, dispatch, addUser, updateUser } = useContext(UserContext);
  const { formData, isEditing } = state;
  
  // Handle form input changes
  const handleChange = (e) => {
    dispatch({
      type: "SET_FORM_DATA",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, email } = formData;

    // Validate all fields are filled
    if (!firstName || !lastName || !phone || !email) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Add or Update user
    if (state.isEditing) {
      updateUser(formData.id, formData);
    } else {
      addUser(formData);
    }

    // Clear form
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {isEditing ? "Update User" : "Add New User"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter email address"
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex justify-end">
          <button
            type="submit"
            className={`px-6 py-2 rounded-lg text-white font-medium transition cursor-pointer
            
            
             ${
               isEditing
                 ? "bg-yellow-500 hover:bg-yellow-600"
                 : "bg-blue-600 hover:bg-blue-700"
             }`}
          >
            {isEditing ? "Update User" : "Create User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
