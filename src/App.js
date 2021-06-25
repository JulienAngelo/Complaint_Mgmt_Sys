import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Common/Header";

function App() {
  return (
    <Router>
        <div>
            <Header/>
        </div>
    </Router>
  );
}

export default App;
