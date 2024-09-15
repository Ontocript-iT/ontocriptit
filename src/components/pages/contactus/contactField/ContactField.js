import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import banner from './banner_00.png';

export default function ContactField() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        lastName: '',
        companyName: '',
        message: '',
        termsAgreed: false,
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.termsAgreed) newErrors.termsAgreed = 'Please agree to the terms and conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form is valid, submitting data:', formData);
            const templateParams = {
                from_name: formData.firstName + ' ' + formData.lastName,
                to_name: 'Recipient Name',
                message: formData.message,
                company: formData.companyName,
                email: formData.email
            };

            emailjs
                .send(
                    'service_0fkg3eg',
                    'template_gnw78b7',
                    templateParams,
                    'r5pZdnkWmzzUXQ05h'
                )
                .then(
                    (result) => {
                        Swal.fire({
                            title: "success",
                            text: "Message sent successfully",
                            icon: "success"
                        });
                    },
                    (error) => {
                        console.error('Error sending message. Please try again.', error);
                        Swal.fire({
                            title: "error",
                            text: "Error sending message. Please try again",
                            icon: "error"
                        });
                    }
                );

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                companyName: '',
                message: '',
                termsAgreed: false,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue });
    };

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <ToastContainer />
            <div className="max-w-7xl mx-auto">
                <div className="md:grid md:grid-cols-2 md:gap-6">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-4">
                            Our team is just a message or call away, ready to engage, understand
                            your unique requirements, and transform challenges into opportunities.
                        </p>
                        <img src={banner} alt="Contact banner" className="rounded-lg shadow-md" />
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-1">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md ${
                                            errors.firstName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                        }`}
                                    />
                                    {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md ${
                                            errors.lastName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                        }`}
                                    />
                                    {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName}</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md ${
                                            errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                        }`}
                                    />
                                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                                        Company name
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md ${
                                        errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                    }`}
                                />
                                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="termsAgreed"
                                        name="termsAgreed"
                                        type="checkbox"
                                        checked={formData.termsAgreed}
                                        onChange={handleChange}
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="termsAgreed" className="font-medium text-gray-700">
                                        I agree with ontocriptiT terms and conditions
                                    </label>
                                </div>
                            </div>
                            {errors.termsAgreed && <p className="mt-2 text-sm text-red-600">{errors.termsAgreed}</p>}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blueColor hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}