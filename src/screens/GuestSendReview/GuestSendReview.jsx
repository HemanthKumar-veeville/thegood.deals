import React from "react";
import { GuestsSendReviews } from "../../components/GuestsSendReviews";
import { VerticalLine } from "../../icons/VerticalLine";

const GuestsSendReviewsScreen = () => {
  return (
    <GuestsSendReviews
      HEADERHeaderOpenClassName="![border-right-style:none] ![border-top-style:none] ![border-left-style:none]"
      HEADERIcon={
        <VerticalLine className="!relative !w-6 !h-6" color="#1B4F4A" />
      }
    />
  );
};

export default GuestsSendReviewsScreen;
