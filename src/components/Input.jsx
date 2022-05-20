const Input = (props) => {
	return (
		<div className="form-group">
			<input
				value={props.value}
				type={props.type}
				placeholder={props.placeholder}
				className="form-control"
				onChange={props.onChange}
			/>
		</div>
	)
}

export default Input;