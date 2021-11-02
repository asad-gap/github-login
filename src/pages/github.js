import React from "react";
import axios from "axios";
import LoginGithub from "react-login-github";

const onSuccess = async (response) => {
  console.log("data payload", response);
  await axios
    .post(`http://192.168.18.15:3000/api/social/github/callback`, response, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((data) => {
      console.log("daata in respiose", data);
      return data;
    })
    .catch((err) => {
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
