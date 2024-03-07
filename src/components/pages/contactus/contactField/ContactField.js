import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import banner from './banner_0.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactField.css';
import Swal from 'sweetalert2'

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

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        if (!formData.termsAgreed) {
            newErrors.termsAgreed = 'Please agree to the terms and conditions';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
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
                        // toast.error('Error sending message. Please try again.');
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
        <div className="textFieldContainer">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="textFieldSubContainer">
                    <div className="leftTextField">
                        <div>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First name*"
                                variant="standard"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                            />
                        </div>

                        <div>
                            <TextField
                                id="email"
                                name="email"
                                label="Email*"
                                variant="standard"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </div>
                    </div>
                    <div className="leftTextField">
                        <div>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last name*"
                                variant="standard"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                            />
                        </div>
                        <div>
                            <TextField
                                id="companyName"
                                name="companyName"
                                label="Company name"
                                variant="standard"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <TextField
                            id="message"
                            name="message"
                            label="Message"
                            variant="standard"
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            style={{ minWidth: '460px' }}
                        />
                    </div>
                </div>
                <div className="checkBox">
                    <FormControlLabel
                        required
                        control={
                            <Checkbox
                                name="termsAgreed"
                                checked={formData.termsAgreed}
                                onChange={handleChange}
                            />
                        }
                        label={
                            <span className="custom-label">
                                I agree with ontocriptiT terms and conditions*
                            </span>
                        }
                    />
                    {errors.termsAgreed && (
                        <span className="Contact-error-message">{errors.termsAgreed}</span>
                    )}
                </div>
                <div>
                    <p className="subText">
                        Our team is just a message or call away, ready to engage, understand
                        your unique requirements, and transform challenges into opportunities
                    </p>
                </div>
                <button type="submit" className="submitBtn">
                    Submit
                </button>
            </form>
            <div className='banner-image'>
                <img src={banner} alt="banner" />
            </div>
        </div>
    );
}
