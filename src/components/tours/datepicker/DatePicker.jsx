import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComponent({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 7);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <>
      <DatePicker
        required
        className="form-control "
        selected={selectedDate}
        minDate={minSelectableDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />
    </>
  );
}
