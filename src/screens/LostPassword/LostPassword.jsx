import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/app/user/userSlice"; // Import the forgotPassword thunk
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader/CustomLoader"; // Assuming you have a CustomLoader component

const LostPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    // Check if the email is empty
    if (!email) {
      return "Please enter your email address.";
    }

    // Check if the email contains an "@" symbol
    if (!email.includes("@")) {
      return "Email address must contain an '@' symbol.";
    }

    // Check if the email contains a domain
    const parts = email.split("@");
    if (parts.length !== 2 || !parts[1].includes(".")) {
      return "Email address must contain a valid domain (e.g., 'example@domain.com').";
    }

    // Check for general email validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    return null; // Return null if no validation errors
  };

  const handleSendLink = async () => {
    const validationError = validateEmail(email);
    if (validationError) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: validationError,
      });
      return;
    }

    try {
      setLoading(true); // Start loading
      await dispatch(forgotPassword({ email })).unwrap(); // Wait for the dispatch to finish
      setEmail(""); // Clear the email input
      navigate("/check-email"); // Navigate to the check-email page
    } catch (err) {
      console.log(err);
      const errorMessage =
        err?.detail ||
        "There was an error sending the reset link. Please try again later.";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleBack = () => {
    navigate("/auth?signin");
  };

  return (
    <div className="relative w-full h-screen bg-primary-background">
      {loading && <CustomLoader />} {/* Show loader when loading is true */}
      {!loading && (
        <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute left-0">
          <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
            <div
              className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
              onClick={handleBack}
            >
              <ArrowLeft1
                className="!relative !w-[18px] !h-[18px]"
                color="#637381"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Back
              </div>
            </div>
          </div>
          <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
            Forgot Password
          </div>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]">
            Please enter your email address to receive a password reset link.
          </p>
          <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
            <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
              <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-primary-color">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="w-full border-none outline-none"
                />
              </div>
            </div>
          </div>
          <div onClick={handleSendLink} className="w-full">
            <Button
              buttonText="Send Reset Link"
              className="!self-stretch !flex-[0_0_auto] !flex !w-full"
              color="primary"
              kind="primary"
              round="semi-round"
              state="default"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LostPassword;
