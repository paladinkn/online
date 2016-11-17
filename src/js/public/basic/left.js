


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
					<Link to='/online'>
						<li>
							online
						</li>
					</Link>
					<Link to='/table'>
						<li>
							table
						</li>
					</Link>
				</ul>
			</div>
			)
	}
}
export default Left;