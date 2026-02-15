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
      <div className="max-w-3xl mx-auto mt-8 space-y-4">
        {/* Skeleton Loaders */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 animate-pulse"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-20 h-9 bg-gray-200 rounded-lg"></div>
                <div className="w-20 h-9 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
        <p className="text-center text-gray-500 mt-6 font-medium animate-pulse">
          Loading users...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {users.length === 0 ? (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-12 text-center border border-gray-200">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-5xl">👥</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            No Users Yet
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get started by adding your first user. Click the button above to
            create a new user profile.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
            <span>💡</span>
            <span>Tip: All user data is stored securely</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* User Count Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {users.length}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {users.length === 1 ? "User" : "Users"}
                </h3>
                <p className="text-sm text-gray-500">
                  {users.length === 1
                    ? "1 active profile"
                    : `${users.length} active profiles`}
                </p>
              </div>
            </div>
          </div>

          {/* User List with Animation */}
          <div className="space-y-4">
            {users.map((user, index) => (
              <div
                key={user.id}
                className="animate-fadeIn"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                <UserItem
                  user={user}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
