import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-lg transition">
      {/* User Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-500">{user.phone}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(user)}
          className="px-4 py-2 text-sm font-medium bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserItem;
