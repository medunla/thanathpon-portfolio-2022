import { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const AboutContactForm = () => {
	const [data, setData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const nameChangeHandle = (event) => {
		setData((prevData) => {
			return {
				...prevData,
				name: event.target.value
			};
		});
	};

	const emailChangeHandle = (event) => {
		setData((prevData) => {
			return {
				...prevData,
				email: event.target.value
			};
		});
	};

	const subjectChangeHandle = (event) => {
		setData((prevData) => {
			return {
				...prevData,
				subject: event.target.value
			};
		});
	};

	const messageChangeHandle = (event) => {
		setData((prevData) => {
			return {
				...prevData,
				message: event.target.value
			};
		});
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
			<div role="form" className="wpcf7" id="wpcf7-f37-o1" lang="th" dir="ltr">
				<div className="screen-reader-response"></div>
				<form
					method="post"
					className="wpcf7-form"
				>
					<div className="row">
						<div className="col-md-6">
							<Input
								value={data.name}
								type="text"
								placeholder="Name"
								onChange={nameChangeHandle}
							/>
							<Input
								value={data.email}
								type="email"
								placeholder="Email"
								onChange={emailChangeHandle}
							/>
							<Input
								value={data.subject}
								type="text"
								placeholder="Subject"
								onChange={subjectChangeHandle}
							/>
						</div>
						<div className="col-md-6">
							<TextArea
								value={data.message}
								className="text-area-message"
								placeholder="Message"
								cols="30"
								rows="7"
								onChange={messageChangeHandle}
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
		</div>
	);
};

export default AboutContactForm;