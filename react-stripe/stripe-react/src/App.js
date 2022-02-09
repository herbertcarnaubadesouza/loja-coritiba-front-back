import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/success" element={<Success />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
