




import React, { PropTypes, Component } from 'react';
import { Header, Left } from './basic'
import './base.scss';


class Base extends Component {
	render() {
		return (
			<div className = 'hei'>
				<Header />
				<div className = 'hei'>
					<Left />

				</div>
			</div>
		)
	}
}


export default Base;


