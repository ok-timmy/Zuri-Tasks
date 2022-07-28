import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import EditNote from './Pages/EditNote';
// import NewNote from "./Pages/NewNote";
// import Login from './Pages/Login'
// import Notes from './Pages/Notes';
// import Register from './Pages/Register';

function App() {
  const [user, setUser] = useState({});
  // window.location.reload();
  useEffect(() => {
    const thisUser = localStorage.getItem('user');
    const thisVeryUser = JSON.parse(thisUser);
    setUser(thisVeryUser)
  }, [])
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header  prop={user}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
