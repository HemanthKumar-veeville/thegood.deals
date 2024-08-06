/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Star } from "../../icons/Star";
import { StarFill50 } from "../../icons/StarFill50";

export const RatingStar = ({ size, rating, className }) => {
  return (
    <div
      className={`inline-flex items-start relative ${
        size === "medium" ? "gap-[5px]" : size === "large" ? "gap-1.5" : "gap-1"
      } ${className}`}
    >
      <StarFill50
        className={
          size === "medium"
            ? "!relative !w-[18px] !h-[18px]"
            : size === "large"
            ? "!relative !w-5 !h-5"
            : "!relative !w-4 !h-4"
        }
      />
      {["five-star", "four-star", "three-star", "two-star"].includes(rating) && (
        <StarFill50
          className={
            size === "medium"
              ? "!relative !w-[18px] !h-[18px]"
              : size === "large"
              ? "!relative !w-5 !h-5"
              : "!relative !w-4 !h-4"
          }
        />
      )}

      {["one-star", "two-star"].includes(rating) && (
        <>
          <Star
            className={
              size === "medium"
                ? "!relative !w-[18px] !h-[18px]"
                : size === "large"
                ? "!relative !w-5 !h-5"
                : "!relative !w-4 !h-4"
            }
            color="#F59E0B"
          />
          <Star
            className={
              size === "medium"
                ? "!relative !w-[18px] !h-[18px]"
                : size === "large"
                ? "!relative !w-5 !h-5"
                : "!relative !w-4 !h-4"
            }
            color="#F59E0B"
          />
          <Star
            className={
              size === "medium"
                ? "!relative !w-[18px] !h-[18px]"
                : size === "large"
                ? "!relative !w-5 !h-5"
                : "!relative !w-4 !h-4"
            }
            color="#F59E0B"
          />
        </>
      )}

      {["five-star", "four-star", "three-star"].includes(rating) && (
        <StarFill50
          className={
            size === "medium"
              ? "!relative !w-[18px] !h-[18px]"
              : size === "large"
              ? "!relative !w-5 !h-5"
              : "!relative !w-4 !h-4"
          }
        />
      )}

      {["one-star", "three-star"].includes(rating) && (
        <Star
          className={
            size === "medium"
              ? "!relative !w-[18px] !h-[18px]"
              : size === "large"
              ? "!relative !w-5 !h-5"
              : "!relative !w-4 !h-4"
          }
          color="#F59E0B"
        />
      )}

      {rating === "three-star" && (
        <Star
          className={
            size === "medium"
              ? "!relative !w-[18px] !h-[18px]"
              : size === "large"
              ? "!relative !w-5 !h-5"
              : "!relative !w-4 !h-4"
          }
          color="#F59E0B"
        />
      )}

      {["five-star", "four-star"].includes(rating) && (
        <StarFill50
          className={
            size === "medium"
              ? "!relative !w-[18px] !h-[18px]"
              : size === "large"
              ? "!relative !w-5 !h-5"
              : "!relative !w-4 !h-4"
          }
        />
      )}

      {rating === "four-star" && (
        <Star
          className={
            size === "medium"
              ? "!relative !w-[18px] !h-[18px]"
              : size === "large"
              ? "!relative !w-5 !h-5"
              : "!relative !w-4 !h-4"
          }
          color="#F59E0B"
        />
      )}

      {rating === "five-star" && (
        <StarFill50
          className={
            size === "medium"
              ? "!relative !w-[18px] !h-[18px]"
              : size === "large"
              ? "!relative !w-5 !h-5"
              : "!relative !w-4 !h-4"
          }
        />
      )}
    </div>
  );
};

RatingStar.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  rating: PropTypes.oneOf(["five-star", "two-star", "three-star", "one-star", "four-star"]),
};
