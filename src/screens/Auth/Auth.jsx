import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button.jsx";
import { TabMenuStyle } from "../../components/TabMenuStyle/TabMenuStyle.jsx";
import { AppleBrand1 } from "../../icons/AppleBrand1/AppleBrand1.jsx";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8.jsx";
import { FacebookFill } from "../../icons/FacebookFill/FacebookFill.jsx";
import { Google } from "../../icons/Google/Google.jsx";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4.jsx";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3.jsx";
import { SignIn } from "../SignIn/SignIn.jsx";
import { SignUp } from "../SignUp/SignUp.jsx";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar.jsx";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";

const Auth = () => {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const switchToLogin = () => {
    setIsLoginTab(true);
    navigate("/auth?login");
  };
  const switchToSignUp = () => {
    setIsLoginTab(false);
    navigate("/auth?signup");
  };

  useEffect(() => {
    const url = window.location.href;
    const params = url.split("?")[1];
    if (params === "login") {
      setIsLoginTab(true);
    } else {
      setIsLoginTab(false);
    }
  }, []);

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && (
        <div className="flex w-screen items-start justify-center gap-[35px] px-[25px] py-0 absolute top-16 left-0 border-b [border-bottom-style:solid] border-stroke">
          <TabMenuStyle
            className={`${
              isLoginTab ? "!border-[#1b4f4a]" : "!border-transparent"
            } !flex-[0_0_auto] !bg-[unset] hover:bg-gray-100 cursor-pointer`}
            divClassName={`${
              isLoginTab ? "!text-[#1b4f4a]" : "!text-[#637381]"
            } !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6`}
            text="To log in"
            onClick={switchToLogin}
          />
          <TabMenuStyle
            className={`${
              !isLoginTab ? "!border-[#1b4f4a]" : "!border-transparent"
            } !flex-[0_0_auto] !bg-[unset] hover:bg-gray-100 cursor-pointer`}
            divClassName={`${
              !isLoginTab ? "!text-[#1b4f4a]" : "!text-[#637381]"
            } !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6`}
            text="Create an account"
            onClick={switchToSignUp}
          />
        </div>
      )}
      {!isLoading ? (
        isLoginTab ? (
          <SignIn setIsLoading={setIsLoading} />
        ) : (
          <SignUp setIsLoading={setIsLoading} />
        )
      ) : (
        ""
      )}
    </>
  );
};

export default Auth;
