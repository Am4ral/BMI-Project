import './input.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SideBar from "./components/SideBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {

  return (
      <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<><SideBar /><Home/></>} />
        </Routes>
      </Router>
  )
}

export default App
