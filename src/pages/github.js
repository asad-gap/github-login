import React from "react";
import axios from "axios";
import LoginGithub from "react-login-github";

const onSuccess = async (response) => {
  const data = new FormData();
  data.append("client_id", "adc691926161c5d0f748");
  data.append("client_secret", "6cb18ec7b1f2e685fb02151ccd5ac880f994e584");
  data.append("code", response.code);
  data.append("redirect_uri", "http://localhost:3000");

  // console.log("data payload", response);

  await axios
    .get(`http://192.168.18.15:3004/api/social/github/callback`, response, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((data) => {
      console.log("daata in respiose", data);
      return data;
    })
    .catch((err) => {
      console.log("daata in respiose", err);
      return err;
    });

  /**
   * GitHub returns data as a string we must parse.
   */
};
const onFailure = (response) => console.error(response);
const GitHubPage = () => {
  return (
    <div>
      <LoginGithub
        clientId="adc691926161c5d0f748"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default GitHubPage;
