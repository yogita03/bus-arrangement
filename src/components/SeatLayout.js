// src/components/SeatLayout.js
import React from 'react';
import './SeatLayout.css';

const SEATS_DATA = [
  // Lower Deck Seats
  { id: 'L1', deck: 'lower', price: 20 },
  { id: 'L2', deck: 'lower', price: 20 },
  { id: 'L3', deck: 'lower', price: 20 },
  { id: 'L4', deck: 'lower', price: 20 },
  { id: 'L5', deck: 'lower', price: 20 },
  // Upper Deck Seats
  { id: 'U1', deck: 'upper', price: 25 },
  { id: 'U2', deck: 'upper', price: 25 },
  { id: 'U3', deck: 'upper', price: 25 },
  { id: 'U4', deck: 'upper', price: 25 },
  { id: 'U5', deck: 'upper', price: 25 },
];

const Seat = ({ id, price, isSelected, onSelect }) => {
  const seatClass = isSelected ? 'selected' : 'available';

  return (
    <div className={`seat ${seatClass}`} onClick={() => onSelect(id)}>
      {id}
      {isSelected && <div className="price">Price: ${price}</div>}
    </div>
  );
};

const SeatLayout = ({ deck, selectedSeats, onSeatSelect }) => {
  const seats = SEATS_DATA.filter((seat) => seat.deck === deck);

  return (
    <div className="seat-layout">
      {seats.map((seat) => (
        <Seat
          key={seat.id}
          id={seat.id}
          price={seat.price}
          isSelected={selectedSeats.includes(seat.id)}
          onSelect={onSeatSelect}
        />
      ))}
    </div>
  );
};

export default SeatLayout;
