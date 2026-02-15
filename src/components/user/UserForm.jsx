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
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-2xl p-8 border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {isEditing ? "Update User Profile" : "Create New User"}
        </h2>
        <p className="text-gray-500 text-sm">
          {isEditing
            ? "Modify user information below"
            : "Fill in the details to add a new user"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:border-gray-300 bg-white"
              placeholder="John"
              required
            />
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:border-gray-300 bg-white"
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              📞
            </span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:border-gray-300 bg-white"
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              ✉️
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:border-gray-300 bg-white"
              placeholder="john.doe@example.com"
              required
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
            <p className="text-red-700 text-sm font-medium flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              {error}
            </p>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                /* Add cancel handler */
              }}
              className="flex-1 px-6 py-3 rounded-xl text-gray-700 font-semibold transition-all duration-200 bg-gray-100 hover:bg-gray-200 border-2 border-gray-200"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={`flex-1 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl cursor-pointer ${
              isEditing
                ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            }`}
          >
            {isEditing ? "💾 Update User" : "✨ Create User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
