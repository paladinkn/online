


import $ from 'jquery';


import React, { PropTypes, Component } from 'react';
import './comp.scss';


class Table extends Component {
	state = {
		data:''
	}
	componentWillMount() {
		var that = this;
		fetch('/data').then(function(res) {
			return res.json();
		}).then(function(json) {
			that.setState({'data': json});
		})
		$('#pal').on('click', () => {
			console.log(111);
		})
	}
	handleData(info) {
		//console.log(this.state.data);
		const elem = info.map((item, index) => {
				return (
					<tr key = { index }>
						<td>{ item.id }</td>
						<td>{ item.name }</td>
						<td>{ item.age }</td>
					</tr>
					)
		})
		return elem;
	}
	test() {
		console.log(222);
	}
	render() {
		if(this.state.data == '') return (<div></div>)
		console.log(this.state.data);
		const dataSource = this.handleData(this.state.data);
		return (
			<div className = 'con_co'>
				<div className = 'title' id = 'pal'>
					<h1>this is table module</h1>
				</div>
				<div>
					<table className = 'co_table'>
						<thead>
							<tr>
								<th>id</th>
								<th>name</th>
								<th>age</th>
							</tr>
						</thead>
						<tbody>
							{ dataSource }
						</tbody>
					</table>
				</div>
			</div>
			)
	}
}
export default Table;