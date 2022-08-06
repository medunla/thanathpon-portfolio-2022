import React from 'react';
import HelperText from './HelperText';

const TextArea = (props) => {
	const classes = `form-control${props.errorMessage ? ' is-error' : ''} ${props.className}`;

	return (
		<div className="form-group">
			<textarea
				value={props.value}
				className={classes}
				placeholder={props.placeholder}
				cols={props.cols}
				rows={props.rows}
				onChange={props.onChange}
			></textarea>
			<HelperText
				value={props.errorMessage || props.helperText}
				isError={!!props.errorMessage}
			/>
		</div>
	);
};

export default TextArea;