import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
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
import AppBar from "../../components/AppBar/AppBar.jsx";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";

const Auth = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  //check the query string to determine which tab to display
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const signup = urlParams.get("signup");
    const login = urlParams.get("login");
    if (signup === "") {
      setIsLoginTab(false); // Show signup tab
    } else if (login) {
      setIsLoginTab(true); // Show login tab if 'login' is present
    }
  }, []);

  const switchToLogin = () => {
    setIsLoginTab(true);
  };

  const switchToSignUp = () => {
    setIsLoginTab(false);
  };

  return (
    <>
      {isLoading && <CustomLoader />}
      {!isLoading && (
        <div className="flex w-full items-start justify-center gap-[35px] px-[25px] py-0 absolute top-16 left-0 border-b [border-bottom-style:solid] border-stroke">
          <TabMenuStyle
            className={`${
              isLoginTab ? "!border-[#1b4f4a]" : "!border-transparent"
            } !flex-[0_0_auto] !bg-[unset] hover:bg-gray-100 cursor-pointer`}
            divClassName={`${
              isLoginTab ? "!text-[#1b4f4a]" : "!text-[#637381]"
            } !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6`}
            text={t("auth.login_tab")} // Translated text for "To log in"
            onClick={switchToLogin}
          />
          <TabMenuStyle
            className={`${
              !isLoginTab ? "!border-[#1b4f4a]" : "!border-transparent"
            } !flex-[0_0_auto] !bg-[unset] hover:bg-gray-100 cursor-pointer`}
            divClassName={`${
              !isLoginTab ? "!text-[#1b4f4a]" : "!text-[#637381]"
            } !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6`}
            text={t("auth.signup_tab")} // Translated text for "Create an account"
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
