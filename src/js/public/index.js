


import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Base from './base';




class App extends Component {
	render() {
		return (
			<Router history = { hashHistory }>
				<Route path = '/' component = { Base }>
					
				</Route>	
			</Router>
			)
	}
}
export default App;