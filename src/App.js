import "./App.css";

import ServiceList from "./components/ServiceList";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/RegisterUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookingList from "./components/BookingList";
import LoginForm from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={ServiceList} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginForm} />
          <Route path="/bookings" component={BookingList} />
        </Switch>
      </Router>
        <Footer />
    </div>
  );
}

export default App;
