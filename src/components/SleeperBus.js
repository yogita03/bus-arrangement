// src/components/SleeperBus.js
import React, { useState } from 'react';
import './SleeperBus.css';
import SeatLayout from './SeatLayout';

const SleeperBus = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatId) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((seat) => seat !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  return (
    <div className="sleeper-bus">
      <h2>Lower Deck</h2>
      <SeatLayout deck="lower" selectedSeats={selectedSeats} onSeatSelect={handleSeatSelect} />
      <h2>Upper Deck</h2>
      <SeatLayout deck="upper" selectedSeats={selectedSeats} onSeatSelect={handleSeatSelect} />
    </div>
  );
};

export default SleeperBus;
