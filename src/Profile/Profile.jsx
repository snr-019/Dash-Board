import React, { useState } from 'react';
import "./Profile.css";

const CustomerForm = () => {
    const [customer, setCustomer] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        age: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'age' && value !== '' && !(/^\d+$/.test(value))) {
            // If age is not a non-negative integer, do not update state
            return;
        }
        setCustomer({
            ...customer,
            [name]: value
        });
    };

    const validate = () => {
        let inputErrors = {};
        if (!customer.firstName) inputErrors.firstName = 'First name is required';
        if (!customer.lastName) inputErrors.lastName = 'Last name is required';
        if (!customer.email) inputErrors.email = 'Email is required';
        if (!customer.phone) inputErrors.phone = 'Phone number is required';
        if (!customer.address) inputErrors.address = 'Address is required';
        if (!customer.gender) inputErrors.gender = 'Gender is required';
        if (!customer.age) {
            inputErrors.age = 'Age is required';
        } else if (parseInt(customer.age) < 0) {
            inputErrors.age = 'Age cannot be negative';
        }
        setErrors(inputErrors);
        return Object.keys(inputErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Customer Details:', customer);
            // Handle form submission here (e.g., send data to a server)
        }
    };

    return (
        <div className="form-container shadow mx-1 px-3 bg-light rounded-3 mt-4"> {/* Added mt-4 for top margin */}
            <h2 className="mb-4" id='user'>Personal Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={customer.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                    </div>
                    <div className="col">
                        <label htmlFor="middleName" className="form-label">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="middleName"
                            name="middleName"
                            value={customer.middleName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={customer.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={customer.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="col">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={customer.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={customer.address}
                        onChange={handleChange}
                    />
                    {errors.address && <div className="text-danger">{errors.address}</div>}
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select
                            className="form-control"
                            id="gender"
                            name="gender"
                            value={customer.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    </div>
                    <div className="col">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            value={customer.age}
                            onChange={handleChange}
                        />
                        {errors.age && <div className="text-danger">{errors.age}</div>}
                    </div>
                </div>
                <div className="d-grid gap-2" id='sub'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CustomerForm;





