import React, { useContext } from "react";
import UserItem from "./UserItem";
import { UserContext } from "../../context/UserContext";

const UserList = () => {
  const { state, dispatch, removeUser } = useContext(UserContext);
  const { users, loading } = state;

  const handleEdit = (user) => {
    dispatch({ type: "SET_FORM_DATA_BULK", payload: user });
    dispatch({ type: "SET_EDITING", payload: true });
  };

  const handleDelete = (id) => {
    removeUser(id);
  };

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <div className="inline-block animate-spin">
          <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading users...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-4">
      {users.length === 0 ? (
        <div className="text-center text-gray-500">No users found.</div>
      ) : (
        users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default UserList;
