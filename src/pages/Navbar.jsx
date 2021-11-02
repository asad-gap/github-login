import { Link, Route } from "react-router-dom";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import LinkedInPage from "./linkedIn";
import GitHubPage from "./github";
import FaceBookLogin from "./facebook";
const Navbar = (props) => {
  return (
    <div>
      <button onClick={props.clickButon}>Click</button>
      <Link to="/home">Home</Link>
      <Route exact path="/linkedin" component={LinkedInPopUp} />
      <Route path="/" component={LinkedInPage} />

      <Link to="/github" component={GitHubPage} />
      <Link to="/facebook" component={FaceBookLogin} />
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Navbar;
