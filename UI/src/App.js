import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ComplainForm from "./components/pages/ComplainForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
 
  Routes,
  Route,
 
} from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Chart from "./components/pages/charts/Chart";
import { useState, useContext } from "react";
import Charts from "./components/pages/charts/Charts";
import Stacked from './components/pages/charts/Stacked'
import CollectorDisplay from "./components/pages/Collector/CollectorDisplay";
import HodDisplay from "./components/pages/Hod/HodDisplay";
import { UserContext } from './context/UserContext';

function App() {
  const [userRole, setUserRole] = useState("")
  const [userName, setUserName] = useState("")
  const [userLogin, setUserLogin] = useState(false);
  const [pending, setpending] = useState(Number)
  const [solved, setsolved] = useState(Number)
  const [working, setworking] = useState(Number)
  const [rejected, setrejected] = useState(Number)
  return (
    <>
    <UserContext.Provider value={{userName, setUserName, userRole, setUserRole, setUserLogin, userLogin}}>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>

      

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/login"
            element={
              <Login />
            }
          ></Route>
          <Route path="/logout" element={<Login />}></Route>
          <Route path="/complainform" element={userLogin ? <ComplainForm /> : <Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/complain"
            element={
              (userRole === "collector") ?
              <CollectorDisplay setpending={setpending} setrejected= {setrejected} setsolved={setsolved} setworking= {setworking}/>
              :
              <Login />
            }
          ></Route>
          <Route
            path="/complain/hod/dept" 
            element={
              userLogin ?
              <HodDisplay  setpending={setpending} setrejected= {setrejected} setsolved={setsolved} setworking= {setworking} /> :
              <Login />
            }
          ></Route>
          <Route path="/chart" element={<Charts pending={pending} rejected= {rejected} solved={solved} setworking= {working} />}></Route>
          <Route path="/dpt/chart" element={<Chart pending={pending} rejected= {rejected} solved={solved} working= {working} />}></Route>
        </Routes>
      </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
