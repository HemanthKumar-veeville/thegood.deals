/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Tooltip } from "../Tooltip";
import { Line_59_1, Line_60_1, Polygon_1_1 } from "../../images";

export const StyleTypePrimary = ({
  className,
  groupClassName,
  overlapGroupClassName,
  lineClassName,
  line,
  tooltipPolygon,
  tooltipPositionTopColorClassName,
}) => {
  return (
    <div className={`relative w-[470px] h-[51px] ${className}`}>
      <div
        className={`absolute w-[470px] h-px top-[51px] left-0 ${groupClassName}`}
      >
        <div
          className={`relative h-2.5 -top-2.5 bg-[url(${Line_59_1})] bg-[100%_100%] ${overlapGroupClassName}`}
        >
          <img
            className={`absolute w-[260px] h-2.5 top-0 left-0 ${lineClassName}`}
            alt="Line"
            src={line}
          />
        </div>
      </div>
      <Tooltip
        className={tooltipPositionTopColorClassName}
        color="primary"
        polygon={tooltipPolygon}
        polygonClassName="!text-white !tracking-[0] !text-sm ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[22px]"
        polygonClassNameOverride="!left-[22px]"
        position="top"
        text="50%"
      />
    </div>
  );
};

StyleTypePrimary.propTypes = {
  line: PropTypes.string,
  tooltipPolygon: PropTypes.string,
};
