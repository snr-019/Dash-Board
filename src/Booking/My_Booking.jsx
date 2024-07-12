import React, { useState } from 'react';
import "./My_Booking.css"; 

const BookingRow = ({ booking, onViewDetails }) => {
    return (
        <div className="booking-row shadow p-3 bg-light rounded-3 d-flex justify-content-between align-items-center">
            <div>
                <p><strong>Book ID:</strong> {booking.bookId}</p>
                <p><strong>Billing Name:</strong> {booking.billingName}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Total:</strong> {booking.total}</p>
                <p><strong>Payment Status:</strong> {booking.paymentStatus}</p>
            </div>
            <button className="btn btn-primary" onClick={() => onViewDetails(booking)}>
                View Details
            </button>
        </div>
    );
};

export default BookingRow;
