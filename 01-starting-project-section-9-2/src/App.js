import logo from './logo.svg';
import AddUser from "./components/AddUser/AddUser";
import {useState} from "react";
import UserList from "./components/UserList/UserList";

function App() {
    // states
    const [usersList, setUsersList] = useState([]);

    // events
    const addUserHandler = (userInput) => {
        // set the user data on state
        setUsersList((prevUserList) => {
            return [...prevUserList, userInput]
        });
    }
  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        {usersList.length> 0 && <UserList items={usersList} />}
    </div>
  );
}

export default App;
