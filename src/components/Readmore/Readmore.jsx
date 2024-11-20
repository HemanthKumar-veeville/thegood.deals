import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

const ReadMore = ({
  description = "",
  readMoreText = "Read More",
  readLessText = "Read Less",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Measure content and line heights
  useEffect(() => {
    if (contentRef.current) {
      const computedStyle = window.getComputedStyle(contentRef.current);
      setContentHeight(contentRef.current.scrollHeight);
      setLineHeight(parseFloat(computedStyle.lineHeight));
    }
  }, [description]);

  const isValidDescription =
    typeof description === "string" && description.length > 0;

  const shouldShowToggle = contentHeight > lineHeight * 2;

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden transition-max-height duration-500 ease-in-out"
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : `${lineHeight * 2}px`, // Allow up to 2 lines initially
        }}
      >
        <p
          ref={contentRef}
          className="relative self-stretch font-normal text-transparent text-base tracking-[0] leading-6"
        >
          <span className="text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            {description}
          </span>
        </p>
      </div>
      {isValidDescription && shouldShowToggle && (
        <span
          className="block mt-2 font-bold text-[#1b4f4a] underline cursor-pointer transition-opacity duration-300 hover:opacity-75"
          onClick={handleToggle}
        >
          {isExpanded ? readLessText : readMoreText}
        </span>
      )}
    </div>
  );
};

// Define prop types for the component
ReadMore.propTypes = {
  description: PropTypes.string, // The description text to display
  readMoreText: PropTypes.string, // The text for the "Read More" button
  readLessText: PropTypes.string, // The text for the "Read Less" button
};

// Define default props for fallback values
ReadMore.defaultProps = {
  description: "",
  readMoreText: "Read More",
  readLessText: "Read Less",
};

export default ReadMore;
