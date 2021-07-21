import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
        classes: 'cut-button',
		color: 'blue',
		text: 'http://jartto.wang'
	}

	render() {
		return (
			<button className = { `btn ${classes}`} style={{backgroundColor: color}}>
				<em>{text}</em>
			</button>
		)
	}
}