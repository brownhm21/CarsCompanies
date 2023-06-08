import { Route, Routes } from "react-router-dom";
//import AddUser from "./features/users/AddUser";
//import EditUser from "./features/users/EditUser";
//import UserList from "./features/users/UserList";
import Home from "./views/Home/Home";


function App() {
  return (
    <div >
      
      <Routes>
      
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
