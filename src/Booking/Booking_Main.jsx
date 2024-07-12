import React, { useState } from 'react';
import BookingRow from './My_Booking';
const BookingList = () => {
    const [bookings] = useState([
        {
            bookId: '',
            billingName: '',
            date: '',
            total: '',
            paymentStatus: ''
        }
    ]);

    const handleViewDetails = (booking) => {
        console.log('View details for booking:', booking);
        // Add your logic for viewing details here
    };

    return (
        <div className="container mt-4">
            <h2>Booking Details</h2>
            {bookings.map((booking, index) => (
                <BookingRow
                    key={index}
                    booking={booking}  // Ensure 'booking' is correctly passed here
                    onViewDetails={handleViewDetails}
                />
            ))}
        </div>
    );
};

export default BookingList;
