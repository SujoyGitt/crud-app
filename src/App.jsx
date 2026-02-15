import "./App.css";
import UserForm from "./components/user/UserForm";
import UserList from "./components/user/UserList";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <div className="p-5">
          <UserForm />
          <UserList />
        </div>
      </UserProvider>
    </>
  );
}

export default App;
