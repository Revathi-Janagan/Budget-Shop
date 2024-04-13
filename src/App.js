import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return <div className="App">
    <Router>

      <Home />
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* Other components/routes */}
    </Router>
    
    
  </div>;
}

export default App;
