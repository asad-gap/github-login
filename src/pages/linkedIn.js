import React, { Component } from "react";

import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

class LinkedInPage extends Component {
  state = {
    code: "",
    errorMessage: "",
  };

  handleSuccess = (data) => {
    this.setState({
      code: data.code,
      errorMessage: "",
    });
    console.log("data", data);
  };

  handleFailure = (error) => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage,
    });
  };
  render() {
    const { code, errorMessage } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="78wv69pelulnl0"
          redirectUri="https://backend.codefest.io/api/social/linkedin/callback"
          scope="r_liteprofile%20r_emailaddress"
          state="34232423"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          supportIE
          // redirectPath="/linkedin"
        >
          <img
            src={linkedin}
            alt="Log in with Linked In"
            style={{ maxWidth: "180px" }}
          />
        </LinkedIn>
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    );
  }
}

export default LinkedInPage;
