import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/login";
import Navbar from "./pages/Navbar.jsx";
function App() {
  const clickButon = () => {
    console.log("Click happened");
  };
  return (
    <div>
      <Navbar clickButon={clickButon} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
