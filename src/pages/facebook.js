import React from "react";

import FacebookLogin from "react-facebook-login";

const onSuccess = async (response) => {
  const res = await fetch("https://backend.codefest.io/api/social/facebook", {
    method: "POST",
    body: JSON.stringify({
      token: response,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log("data", data);
};
const onFailure = (response) => console.error(response);
const FaceBookLogin = () => {
  return (
    <div>
      {" "}
      <FacebookLogin
        appId="235104465142155"
        autoLoad={true}
        fields="name,email,picture"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default FaceBookLogin;
