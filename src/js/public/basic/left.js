


import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class Left extends Component {
	render() {
		return (
			<div className = 'left_con'>
				<ul>
					<Link to='/home'>
						<li>
							home
						</li>
					</Link>
					<Link to='/demo'>
						<li>
							demo
						</li>
					</Link>
				</ul>
			</div>
			)
	}
}
export default Left;