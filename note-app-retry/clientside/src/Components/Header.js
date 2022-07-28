import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NewNote from "../Pages/NewNote";
import Register from "../Pages/Register";
import Notes from "../Pages/Notes";
import {UserContext} from '../UserContext';
// import EditNote from "../Pages/EditNote";

function Header({prop}) {
  const [userdata, setUserdata] = useState({});
  const {user, logout} = useContext(UserContext)
  // const [isloggedin, setIsloggedin] = useState(false)

 useEffect(() => {
   setUserdata(user)
  //  setIsloggedin(true);
 }, [user])
 
 console.log(userdata);
 
 const navigate = useNavigate();

  const signout = () => {
    logout();
    navigate( '/')
  }

  
  return (
      <div>
        <nav className="container flex justify-around py-4 mx-auto bg-gray-200">
          <div className="flex items-center">
            <Link to='/'><h3 className="text-2xl font-medium text-blue-500">TM NOTES</h3></Link>
          </div>
          {/* <!-- left header section --> */}
          <div className="items-center hidden space-x-8 lg:flex">
            <Link to="/newnote">New Note</Link>
          </div>
          {/* <!-- right header section --> */}

          { (Object.keys(userdata).length === 0 && userdata.constructor === Object) ?
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <button className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
                Sign in
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 text-gray-200 bg-gray-400 rounded-md">
                Sign up
              </button>
            </Link>
          </div> :  <div><span className="mr-2">Hello,  {userdata.name.split(' ')[0]}</span>
          {/* <Link to="/"> */}
              <button onClick={signout} className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md">
                Log out
              </button>
            {/* </Link> */}
          </div> }
        </nav>

        <Routes>
          <Route exact path="/" element={ <Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/notes" element={<Notes />}/>
          <Route path="/newnote" element={<NewNote />}/>
          {/* <Route path="/editnote/:id" element={<Note />}/> */}
        </Routes>
      </div>
  );
}

export default Header;
