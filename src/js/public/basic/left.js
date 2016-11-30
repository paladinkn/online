


import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class Left extends Component {
	leftContr() {
		var url = window.location.href.split('#')[1].split('?')['0'].split('/')[1];
		if(!url) {
			url = 'home';
		}
		return url;
	}
	render() {
		var _thisUrl = this.leftContr();
		return (
			<div className = 'left_con'>
				<ul>
					<Link to='/home'>
						<li className = { _thisUrl == 'home'?'th_color':'' } >
							home
						</li>
					</Link>
					<Link to='/demo'>
						<li className = { _thisUrl == 'demo'?'th_color':'' } >
							demo
						</li>
					</Link>
					<Link to='/online'>
						<li className = { _thisUrl == 'online'?'th_color':'' } >
							online
						</li>
					</Link>
					<Link to='/table'>
						<li className = { _thisUrl == 'table'?'th_color':'' } >
							table
						</li>
					</Link>
					<Link to='/check'>
						<li className = { _thisUrl == 'check'?'th_color':'' } >
							check
						</li>
					</Link>
					<Link to='/mod'>
						<li className = { _thisUrl == 'mod'?'th_color':'' } >
							modules
						</li>
					</Link>
				</ul>
			</div>
			)
	}
}
export default Left;