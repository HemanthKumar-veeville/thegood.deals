import React, { useState } from "react";
import { CalenderAlt1 } from "../../icons/CalenderAlt1";

// Helper function to generate calendar days
const getDaysInMonth = (month, year) => {
  const days = [];
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // First day of the month (0 = Sunday)
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate(); // Last date of the month

  // Add padding for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Empty spaces for the previous month
  }

  // Add all days of the current month
  for (let day = 1; day <= lastDateOfMonth; day++) {
    days.push(day);
  }

  return days;
};

const ModernDatePicker = ({ name, onChange, date }) => {
  // Calculate the minimum date (tomorrow)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1); // Add 1 day

  // Calculate the maximum date (1 month from tomorrow)
  const maxDate = new Date(minDate);
  maxDate.setMonth(maxDate.getMonth() + 1);

  const [selectedDate, setSelectedDate] = useState(new Date(date || minDate));
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const handleDateChange = (day) => {
    if (!day) return;
    const newDate = new Date(currentYear, currentMonth, day);

    if (newDate >= minDate && newDate <= maxDate) {
      setSelectedDate(newDate);
      setShowCalendar(false); // Close the calendar after selecting a date
      const formattedDate = formatDate(newDate);

      if (onChange) onChange(name, formattedDate); // Call onChange if provided
    }
  };

  // Function to format date in 'YYYY-MM-DDTHH:mm' format
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const formatDateInFrench = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleMonthChange = (increment) => {
    const newMonth = currentMonth + increment;
    let updatedYear = currentYear;
    let updatedMonth = newMonth;

    if (newMonth < 0) {
      updatedMonth = 11; // December
      updatedYear = currentYear - 1;
    } else if (newMonth > 11) {
      updatedMonth = 0; // January
      updatedYear = currentYear + 1;
    }

    setCurrentMonth(updatedMonth);
    setCurrentYear(updatedYear);
  };

  const isDateInRange = (day) => {
    if (!day) return false;
    const date = new Date(currentYear, currentMonth, day);
    return date >= minDate && date <= maxDate;
  };

  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <CalenderAlt1 className="w-6 h-6" />
      </div>
      <input
        type="text"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 focus:outline-none"
        value={formatDateInFrench(selectedDate)}
        readOnly
        onClick={toggleCalendar}
        placeholder="ex. 25/04/2025"
      />

      {showCalendar && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full p-4">
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 text-[#2a4e4a] font-bold text-2xl"
              onClick={() => handleMonthChange(-1)}
            >
              &lt;
            </button>
            <span className="text-lg font-semibold text-[#2a4e4a]">
              {new Date(currentYear, currentMonth).toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 text-[#2a4e4a] font-bold text-2xl"
              onClick={() => handleMonthChange(1)}
            >
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((day, idx) => (
              <button
                key={idx}
                type="button"
                disabled={!isDateInRange(day)}
                className={`p-2 w-10 h-10 flex items-center justify-center text-sm rounded-full transition-colors ${
                  day === selectedDate.getDate() &&
                  currentMonth === selectedDate.getMonth() &&
                  currentYear === selectedDate.getFullYear()
                    ? "bg-[#2a4e4a] text-white"
                    : !isDateInRange(day)
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-900 hover:bg-gray-200 focus:bg-blue-100"
                }`}
                onClick={() => handleDateChange(day)}
              >
                {day || ""}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernDatePicker;
