

import React, { PropTypes, Component } from 'react';
import './mod.scss';


class Mod extends Component {
	render() {
		return (
			<div className = 'co_body'>
				<h1>modules project</h1>
				<div className = 'co_content'>
					<input type='text' className = 'img_url'/>
					<button className = 'sub_img'>生成page</button>
					<div className = 'img_view'></div>
				</div>
			</div>

			)
	}
}

export default Mod;