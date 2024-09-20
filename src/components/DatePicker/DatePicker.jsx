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

const ModernDatePicker = ({ name, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const handleDateChange = (day) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setShowCalendar(false); // Close the calendar after selecting a date
    const date = new Date(newDate);

    // Function to format date in 'YYYY-MM-DDTHH:mm' format
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const formattedDate = formatDate(date);
    console.log(formattedDate); // Output: 2024-10-01T18:30

    if (onChange) onChange(name, formattedDate); // Call onChange if it's provided
  };

  // Format the date in French format (dd/MM/yyyy)
  const formatDateInFrench = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Handle month change
  const handleMonthChange = (increment) => {
    const newMonth = currentMonth + increment;
    setCurrentMonth(newMonth);
    if (newMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else if (newMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      {/* Input field */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {/* Increased icon size */}
        <CalenderAlt1 className="w-6 h-6" />
      </div>
      <input
        type="text"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 focus:outline-none" // Adjusted padding to add space between icon and date
        value={formatDateInFrench(selectedDate)}
        readOnly
        onClick={toggleCalendar} // Toggle the calendar when clicking the input
        placeholder="ex. 25/04/2025"
      />

      {/* Calendar */}
      {showCalendar && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full p-4">
          {/* Header for month/year navigation */}
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 text-[#2a4e4a] font-bold text-2xl" // Increased font size
              onClick={() => handleMonthChange(-1)} // Move to previous month
            >
              &lt;
            </button>
            <span className="text-lg font-semibold text-[#2a4e4a]">
              {" "}
              {/* Changed month heading color */}
              {new Date(currentYear, currentMonth).toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 text-[#2a4e4a] font-bold text-2xl" // Increased font size
              onClick={() => handleMonthChange(1)} // Move to next month
            >
              &gt;
            </button>
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((day, idx) => (
              <button
                key={idx}
                type="button" // Ensure the button doesn't trigger any form submission
                className={`p-2 w-10 h-10 flex items-center justify-center text-sm rounded-full transition-colors ${
                  day === selectedDate.getDate() &&
                  currentMonth === selectedDate.getMonth() &&
                  currentYear === selectedDate.getFullYear()
                    ? "bg-[#2a4e4a] text-white" // Updated background color for selected date
                    : "text-gray-900 hover:bg-gray-200 focus:bg-blue-100"
                }`}
                onClick={() => handleDateChange(day)} // Directly handle the date change
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
