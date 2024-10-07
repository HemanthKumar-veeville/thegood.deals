import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckmarkCircle1 } from "../icons/CheckmarkCircle1/CheckmarkCircle1";
import { ChevronDown } from "../icons/ChevronDown/ChevronDown";
import { CrossCircle3 } from "../icons/CrossCircle3/CrossCircle3";

export const DangerAlert = ({ alertMessage, participants }) => {
  const [showList, setShowList] = useState(false);
  console.log({ participants });
  // Toggle list open/close and rotate the chevron
  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="flex flex-col items-start justify-center gap-3 px-5 py-4 relative bg-[#FFECEC] rounded-lg">
      <div className="flex items-center justify-center gap-3 w-full">
        <div className="w-[2.5rem] h-[2rem] flex items-center justify-center bg-[#F23030] rounded-full">
          <CrossCircle3 className="w-[1.5rem] h-[1.25rem]" color="white" />
        </div>
        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#bc1c21] text-sm tracking-[0] leading-5 w-full">
          {alertMessage}{" "}
          <span className="[font-family:'Inter-Bold',Helvetica] font-bold">
            A new request has been sent automatically.
          </span>
        </p>
      </div>
      <div className="w-full">
        <button
          onClick={toggleList}
          className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-md border border-gray-300 font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]"
        >
          Show the list
          {/* Rotating ChevronDown */}
          <motion.div
            animate={{ rotate: showList ? 180 : 0 }} // Rotate the chevron based on the list state
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        {/* Smooth Animation for list opening/closing */}
        <motion.div
          className="mt-2 w-full bg-white rounded-md border border-gray-300 shadow-sm"
          initial={false}
          animate={{ height: showList ? "auto" : 0, opacity: showList ? 1 : 0 }}
          transition={{ height: { duration: 0.3 }, opacity: { duration: 0.2 } }}
          style={{ overflow: "hidden" }} // Hides content when the list is closing
        >
          {participants.map((participant, index) => (
            <div
              key={participant?.order_id}
              className="flex items-center px-4 py-2 gap-2.5"
            >
              {participant?.payment_status !== "succeeded" ? (
                <CrossCircle3 className="w-5 h-5" color="#F23030" />
              ) : (
                <CheckmarkCircle1 className="w-5 h-5" color="#13C296" />
              )}
              <p
                className={`${
                  participant?.payment_status !== "succeeded"
                    ? "font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-redred text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]"
                    : "text-[#13C296] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]"
                }`}
              >
                {participant?.username}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
