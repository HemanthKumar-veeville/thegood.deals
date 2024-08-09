import React from "react";
import { ArtisanDeniedThe } from "../../components/ArtisanDeniedThe";
import { VerticalLine2 } from "../../icons/VerticalLine2";

export const ArtisanDeniedTheScreen = () => {
  return (
    <ArtisanDeniedThe
      HEADERHeaderOpenClassName="![border-right-style:none] ![border-top-style:none] ![border-left-style:none]"
      HEADERIcon={
        <VerticalLine2 className="!relative !w-6 !h-6" color="#1B4F4A" />
      }
    />
  );
};
