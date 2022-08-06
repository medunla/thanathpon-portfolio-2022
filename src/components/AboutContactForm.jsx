import React, { useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';

const validateInput = (data) => {
	if (!data) {
		return 'The field is required';
	} else if (data.length > 255) {
		return 'Characters must less or equal 255';
	}
	return '';
};

const AboutContactForm = () => {
	const [data, setData] = useState({
		name: '',
		errorNameMessage: '',
		email: '',
		errorEmailMessage: '',
		subject: '',
		errorSubjectMessage: '',
		message: '',
		errorMessageMessage: '',
	});

	const handleChangeName = (event) => {
		setData((prevData) => ({
				...prevData,
				name: event.target.value,
				errorNameMessage: '',
		}));
	};

	const handleChangeEmail = (event) => {
		setData((prevData) => ({
				...prevData,
				email: event.target.value,
				errorEmailMessage: '',
		}));
	};

	const handleChangeSubject = (event) => {
		setData((prevData) => ({
				...prevData,
				subject: event.target.value,
				errorSubjectMessage: '',
		}));
	};

	const handleChangeMessage = (event) => {
		setData((prevData) => ({
				...prevData,
				message: event.target.value,
				errorMessageMessage: '',
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const errorNameMessage = validateInput(data.name);
		const errorEmailMessage = validateInput(data.email);
		const errorSubjectMessage = validateInput(data.subject);
		const errorMessageMessage = validateInput(data.message);
		const isError = [errorNameMessage, errorEmailMessage, errorSubjectMessage, errorMessageMessage].some((v) => v);

		if (isError) {
			return setData((prevData) => ({
				...prevData,
				errorNameMessage,
				errorEmailMessage,
				errorSubjectMessage,
				errorMessageMessage,
			}));
		}

		// TODO: Submit
	};

	return (
		<div
			className="fh5co-narrow-content animate-box fadeInLeft animated"
			data-animate-effect="fadeInLeft"
		>
			<div className="row">
				<div className="col-md-4">
					<h2 className="fh5co-heading">Get In Touch</h2>
				</div>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-md-6">
						<Input
							value={data.name}
							errorMessage={data.errorNameMessage}
							type="text"
							placeholder="Name"
							onChange={handleChangeName}
						/>
						<Input
							value={data.email}
							errorMessage={data.errorEmailMessage}
							type="email"
							placeholder="Email"
							onChange={handleChangeEmail}
						/>
						<Input
							value={data.subject}
							errorMessage={data.errorSubjectMessage}
							type="text"
							placeholder="Subject"
							onChange={handleChangeSubject}
						/>
					</div>
					<div className="col-md-6">
						<TextArea
							value={data.message}
							errorMessage={data.errorMessageMessage}
							className="text-area-message"
							placeholder="Message"
							cols="30"
							rows="7"
							onChange={handleChangeMessage}
						>
							{data.message}
						</TextArea>
						<div className="form-group">
							<input
								type="submit"
								value="Send Message"
								className="btn btn-primary btn-md"
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AboutContactForm;