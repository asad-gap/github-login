import React from "react";

import GoogleLogin from "react-google-login";
const GoogleLoginPage = () => {
  const handleLogin = async (googleData) => {
    const res = await fetch("http://192.168.18.15:3000/api/social/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data", data);
  };
  return (
    <div>
      <GoogleLogin
        clientId="706802953983-0gtfbk96th2qp5u2mdtnin36apc2i353.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
export default GoogleLoginPage;
