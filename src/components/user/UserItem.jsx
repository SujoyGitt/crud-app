import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden">
  {/* Decorative gradient bar */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
    {/* User Info with Avatar */}
    <div className="flex items-center gap-4 flex-1">
      {/* Enhanced Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ring-4 ring-blue-50">
          {user.firstName.charAt(0)}{user.lastName.charAt(0)}
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-md flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      </div>

      {/* User Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">
            {user.firstName} {user.lastName}
          </h3>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
            Active
          </span>
        </div>
        
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-gray-600 group/email">
            <span className="text-base">✉️</span>
            <a 
              href={`mailto:${user.email}`}
              className="hover:text-blue-600 transition-colors truncate group-hover/email:underline font-medium"
            >
              {user.email}
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 group/phone">
            <span className="text-base">📞</span>
            <a 
              href={`tel:${user.phone}`}
              className="hover:text-blue-600 transition-colors group-hover/phone:underline font-medium"
            >
              {user.phone}
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-2.5 md:flex-shrink-0">
      <button
        onClick={() => onEdit(user)}
        className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 hover:-translate-y-0.5"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span>Edit</span>
      </button>

      <button
        onClick={() => {
          if (window.confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) {
            onDelete(user.id);
          }
        }}
        className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl hover:from-red-600 hover:to-rose-700 transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 hover:-translate-y-0.5"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        <span>Delete</span>
      </button>
    </div>
  </div>
</div>
  );
};

export default UserItem;
