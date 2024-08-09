import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import AppBar from "../../components/AppBar/AppBar";

export const LostPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendLink = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!email) {
      setErrorMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    try {
      // Assume sendPasswordReset is a function that sends the password reset link
      await sendPasswordReset(email);
      setSuccessMessage(
        "Le lien de réinitialisation du mot de passe a été envoyé."
      );
    } catch (error) {
      setErrorMessage("Erreur lors de l'envoi du lien. Veuillez réessayer.");
    }
  };

  return (
    <div className="relative w-screen h-screen bg-primary-background">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute top-16 left-0">
        <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
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
          Forgot your password
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]">
          Enter your email and we will send you a recovery link.
        </p>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-primary-color">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="E-mail"
                className="w-full border-none outline-none"
              />
            </div>
          </div>
        </div>
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        {successMessage && <p className="text-green-600">{successMessage}</p>}
        <div onClick={handleSendLink} className="w-full">
          <Button
            buttonText="Receive the link"
            className="!self-stretch !flex-[0_0_auto] !flex !w-full"
            color="primary"
            kind="primary"
            round="semi-round"
            state="default"
          />
        </div>
      </div>
    </div>
  );
};

// This function simulates sending a password reset link
const sendPasswordReset = async (email) => {
  // Simulate a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a success response
      resolve();
    }, 1000);
  });
};
