import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CardGroup from "./Pages/Cards/CardGroup";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoutes from "./Routing/Routers";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* <Home /> */}
        {/* <Navbar /> */}
        {/* <Login /> */}

        {/* <CardGroup /> */}
      {/* </Router> */}
      <BaseRoutes />
    </div>
  );
}

export default App;
