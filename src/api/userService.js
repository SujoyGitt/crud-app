// Get all users from localStorage
export const getUsers = async () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  return users;
};

// Create new user - validate and assign ID
export const createUser = async (user) => {
    
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  
  // Check if email or phone already exists
  const isDuplicate = users.some(
    (u) => u.email === user.email || u.phone === user.phone
  );
  
  if (isDuplicate) {
    throw new Error("User with this email or phone already exists!");
  }

  // Create user with ID if not exists
  const newUser = user.id ? user : { ...user, id: Date.now() };
  return newUser;
};

// Update user - just return the updated data
export const updateUser = async (id, updatedUser) => {
  return { ...updatedUser, id };
};

// Delete user - just return the ID
export const deleteUser = async (id) => {
  return id;
};
