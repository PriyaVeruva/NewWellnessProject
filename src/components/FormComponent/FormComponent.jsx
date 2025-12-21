import { useState } from "react";
import "./FormComponent.css";
import { formFieldsData } from "./data";
import { registerForm } from "../../server/enquiry";

const FormComponent = () => {
	const [inputFields, setInputFields] = useState({
		name: "",
		mobileNumber: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		let newValue = value;
		if (name === "name") {
			//removed spacing from starting  and in between
			newValue = value
				.replace(/[^a-zA-Z .'-]/g, "")
				.replace(/\s+/g, " ")
				.trimStart();
		}
		if (name === "mobileNumber") {
			newValue = value.replace(/\D/g, "").slice(0, 10);
		}
		if (newValue.startsWith(" ")) return;
		setInputFields((prev) => ({ ...prev, [name]: newValue }));
		setErrors((prev) => ({ ...prev, [name]: "" }));
	};
	const handleBlur = (e) => {
		const { name, value } = e.target;
		const updatedField =
			name.slice(0, 1).toLocaleUpperCase() + name.slice(1);

		if (!value.trim()) {
			setErrors((prev) => ({
				...prev,
				[name]: `${[updatedField]} is required`,
			}));
			return;
		}
		if (name === "email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(value)) {
				setErrors((prev) => ({
					...prev,
					[name]: "Enter a valid email (example@gmail.com)",
				}));
			}
		}
		if (name === "mobileNumber" && value.length !== 10) {
			setErrors((prev) => ({
				...prev,
				[name]: "Phone number must be 10 digits",
			}));
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		let newErrors = {};
		Object.keys(inputFields).forEach((field) => {
			const value = inputFields[field];
			console.log(value, "value");
			const updatedField =
				field.slice(0, 1).toLocaleUpperCase() + field.slice(1);
			if (!value.trim()) {
				newErrors[field] = `${updatedField} is required`;
			}
		});
		if (
			inputFields.email &&
			!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputFields.email)
		) {
			newErrors.email = "Enter a valid email";
		}

		if (inputFields.mobileNumber?.length !== 10) {
			newErrors.mobileNumber = "Phone number must be 10 digits";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		setIsSubmitting(true);
		registerForm(inputFields, setInputFields, setIsSubmitting);
		console.log("Form Submitted:", inputFields);
	};

	return (
		<form className="formContainer" onSubmit={handleFormSubmit}>
			<h2>Enquiry Form</h2>

			{formFieldsData.map((field) => (
				<div key={field.name} className="fieldWrapper">
					<h4>{field.label} *</h4>

					<input
						type={field.type}
						name={field.name}
						value={inputFields[field.name] || ""}
						placeholder={field.placeholder}
						maxLength={field.maxLength}
						onChange={handleInputChange}
						onBlur={handleBlur}
					/>

					{errors[field.name] && (
						<p className="error">{errors[field.name]}</p>
					)}
				</div>
			))}

			<button
				type="submit"
				className="submitBtn"
				disabled={isSubmitting}
			>
				{isSubmitting ? "Submitting..." : "Book An Appointment"}
			</button>
		</form>
	);
};

export default FormComponent;
