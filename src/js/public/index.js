import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Home, Demo } from './components';
import Base from './base';




class App extends Component {
	render() {
		return (
			<Router history = { hashHistory }>
				<Route path = '/' component = { Base }>
					<IndexRoute component={ Home }/>
					<Route path = '/home' component = { Home }/>
					<Route path = '/demo' component = { Demo }/>
				</Route>	
			</Router>
			)
	}
}
export default App;