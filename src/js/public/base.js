




import React, { PropTypes, Component } from 'react';
import { Header, Left } from './basic';
import './base.scss';
import { Row, Col } from 'antd';


class Base extends Component {
	render() {
		const { children } = this.props;
		return (
			<Row className = 'hei'>
				<Header />
				<Col span = {24} className = 'hei'>
					<Col span = {3} className = 'left'>
						<Left />
					</Col>	
					<Col span = {21} className = 'right'>
						{ children }
					</Col>
				</Col>
			</Row>
		)
	}
}


export default Base;


