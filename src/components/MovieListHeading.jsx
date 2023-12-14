import React from 'react';
import Col from "react-bootstrap/Col";

const MovieListHeading = (props) => {
	return (
		<Col>
			<br></br>
			<br></br>
			<h1>{props.heading}</h1>
		</Col>
	);
};

export default MovieListHeading;