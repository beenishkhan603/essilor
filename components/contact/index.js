'use client';
import { TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from 'react';

import styles from './style.module.css';
const ContactForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		message: '',
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission (e.g., send data to a backend)
		console.log('Form submitted:', formData);
		// You can add code here to send the data to a backend service
	};
	return (
		<form onSubmit={handleSubmit} className={styles.contactForm}>
			<div>
				<label>Email:</label>
				<TextField
					className={styles.textFields}
					type="email"
					name="name"
					fullWidth
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>
					Message:
					<TextareaAutosize className={styles.description} minRows={3} />
				</label>
			</div>
			<button type="submit" className={styles.submitBtn}>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
