        import React from 'react';
        import Header from '../Header/header.js';
        import Trips from '../Trips/index.js';
        import "./index.css";
        import CustomerForm from '../Profile/Profile.jsx';
        import BookingList from '../Booking/Booking_Main.jsx';
        import ForgotPassword from '../Settings/forgotpwd.js';
        import PwdApp from '../Settings/password.js';
        
        const TripDetails = [
            { id: 1, total: 2, text: 'Current Trip ', color: 'orange' },
            { id: 2, total: 5, text: 'Completed Trip', color: 'green' },
            { id: 3, total: 10, text: "Remaining Trip", color: 'blue' }
        ];
        
        const Body = () => {
            return (
                <div className='w-100 course-wrapper'>
                    <Header />
                    <h4 className='mx-3 d-block'>Welcome Back, Str Adventures</h4>
                    <div className='d-flex justify-content-around'>
                        <div>
                            <div className='d-flex gap-5 mt-4 '>
                                {TripDetails.map(each => (
                                    <Trips key={each.id} each={each} />
                                ))}
                            </div>
                            <div>
                                <CustomerForm />
                                <BookingList />
                                <ForgotPassword />
                                <PwdApp />
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
        
        export default Body;
        