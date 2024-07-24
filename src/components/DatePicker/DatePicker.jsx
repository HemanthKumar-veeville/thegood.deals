import React, { useState, useEffect } from "react";
import { CalenderAlt1 } from "../../icons/CalenderAlt1";

const DatePicker = () => {
  const placeholder = "ex. Current April 2025";
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState(placeholder);

  useEffect(() => {
    if (value) {
      setDisplayValue(
        new Date(value).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })
      );
    } else {
      setDisplayValue(placeholder);
    }
  }, [value]);

  const handleDateChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setDisplayValue(
      new Date(newValue).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    );
  };

  return (
    <div class="relative max-w-sm">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <CalenderAlt1 />
      </div>
      <input
        datepicker
        id="default-datepicker"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 focus:outline-none"
        placeholder="Select date"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
