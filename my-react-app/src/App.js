import logo from './logo.svg';
import down from './down.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Home component
import Home from "./Home";
// import About component
import About from "./About";
// import ContactUs component
import ContactUs from "./ContactUs";



function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to ReactJS Application.
        </p>
        <a href='https://www2.deloitte.com/'><button className="App-button" type="button">Deloitte</button>
        </a>
        <img src={down} className="imgg"alt="logo" />
      </header>
      </div>
      <div className="homecss">
      <Router className="homecss">
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
</Router>
      </div>
</>
  );
}

export default App;
