# CRUD User Management App

A simple, clean React app for managing users with Create, Read, Update, and Delete functionality. Built with React Context API, useReducer, and localStorage.

## 🚀 Quick Start

### Setup Instructions

1. **Navigate to project**
   ```bash
   cd d:\react-practice\crud-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Click the localhost link (usually `http://localhost:5173`)
   - App loads with localStorage data
   - Loading spinner appears briefly, then users display

---

## 📋 What This App Does

- ✅ **Create** - Add new users with form validation
- ✅ **Read** - View all users in a list
- ✅ **Update** - Edit existing user details
- ✅ **Delete** - Remove users from the app
- ✅ **Persist** - Data saved in browser's localStorage

---

## 🔧 How to Add New Fields to the Form

### Step 1: Add to Initial State
**File:** `src/context/UserContext.jsx`

```javascript
const initialState = {
  users: [],
  loading: true,
  isEditing: false,
  formData: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: ""  // add new feild 
  },
};
```

### Step 2: Add to Form HTML
**File:** `src/components/user/UserForm.jsx`

```javascript
<div>
  <label className="block text-sm font-medium text-gray-600 mb-1">
    Address
  </label>
  <input
    type="text"
    name="address"          // MUST match formData key
    value={formData.address}
    onChange={handleChange}
    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
    placeholder="Enter address"
  />
</div>
```

### Step 3: Add to Validation (Optional)
**File:** `src/components/user/UserForm.jsx`

```javascript
const { firstName, lastName, phone, email, address } = formData;

if (!firstName || !lastName || !phone || !email || !address) {
  setError("Please fill in all fields");
  return;
}
```

### Step 4: Display in User Item
**File:** `src/components/user/UserItem.jsx`

```javascript
<p className="text-sm text-gray-500">{user.address}</p>
```

**That's it!** The app automatically handles state management and localStorage.

---

## 🎯 Architecture

```
App.jsx
  ├─ UserProvider (Context)
  │   ├─ userReducer.jsx (State + localStorage)
  │   └─ userService.js (Validation)
  │
  ├─ UserForm.jsx (Form Input)
  └─ UserList.jsx (Display)
       └─ UserItem.jsx (Single User)
```

---

## 💾 Design Decisions

### 1. **Single Source of Truth**
- Only `userReducer.js` saves to localStorage
- Prevents duplicate saves and data bugs
- Clean separation: API validates → Reducer persists

### 2. **localStorage for Persistence**
- No backend required
- Works offline completely
- Perfect for learning and demos

### 3. **Context API Over Redux**
- Simpler for small apps
- Less code to understand
- Easier to modify and extend

### 4. **Duplicate Prevention**
- Email and phone checked at API layer
- Alert shown if duplicate found
- Validation before state update

### 5. **Form State Strategy**
- Single `formData` object in global state
- `isEditing` flag for Add vs Update
- Reset after successful submit

---

## 📁 File Structure

```
src/
├── api/
│   └── userService.js          # Validation (no side effects)
├── context/
│   ├── UserContext.jsx         # State provider & functions
│   └── userReducer.jsx         # State updates + localStorage
├── components/user/
│   ├── UserForm.jsx            # Form for add/edit
│   ├── UserList.jsx            # Display + loading
│   └── UserItem.jsx            # Single user card
└── App.jsx                     # Root component
```

---

## 🔑 Key Concepts

### Reducer Actions
- `SET_FORM_DATA` - Update field while typing
- `SET_FORM_DATA_BULK` - Load for editing
- `RESET_FORM` - Clear after submit
- `ADD_USER` - Add + save to localStorage
- `UPDATE_USER` - Update + save
- `DELETE_USER` - Remove + save
- `SET_EDITING` - Toggle edit mode
- `SET_LOADING` - Toggle spinner

### API Layer
- `getUsers()` - Read from localStorage
- `createUser()` - Validate duplicate, assign ID
- `updateUser()` - Return updated user
- `deleteUser()` - Return user ID

**Design:** API validates only, Reducer saves to localStorage

---

## 📊 State Shape

```javascript
{
  users: [{ id, firstName, lastName, phone, email }, ...],
  loading: boolean,
  isEditing: boolean,
  formData: { firstName, lastName, phone, email }
}
```

---

## 🎓 Learning Points

1. **Context API** - Global state management
2. **useReducer** - Complex state logic
3. **localStorage** - Browser persistence
4. **Form Validation** - Client-side checks
5. **Separation of Concerns** - Clean architecture
6. **Immutable Updates** - Spread operator
7. **Conditional Rendering** - Dynamic UI

---

## ✨ Features

| Feature | Status |
|---------|--------|
| Add User | ✅ |
| View Users | ✅ |
| Edit User | ✅ |
| Delete User | ✅ |
| Duplicate Prevention | ✅ |
| Loading State | ✅ |
| Form Validation | ✅ |
| Data Persistence | ✅ |
