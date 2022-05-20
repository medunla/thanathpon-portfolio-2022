import HelperText from './HelperText'

const Input = (props) => {
	const classes = `form-control${props.errorMessage ? ' is-error' : ''} ${props.className}`;

	return (
		<div className="form-group">
			<input
				value={props.value}
				type={props.type}
				placeholder={props.placeholder}
				className={classes}
				onChange={props.onChange}
			/>
			<HelperText
				value={props.errorMessage || props.helperText}
				isError={!!props.errorMessage}
			/>
		</div>
	)
}

export default Input;