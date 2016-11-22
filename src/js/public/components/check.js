





import React, { PropTypes, Component } from 'react';


class Check extends Component {
	state = {
		name: '22',
		age: ''
	}
	handleChange = (e) => {
		var newState = {};
			newState[e.target.name] = e.target.value;
		//console.log(e.target.name);
		this.setState(newState);
		
	}
	subForm = () => {
		
	}
	render() {
		var { name, age } = this.state;
		return (
			<div className = 'con_co'>
				<div className = 'title'>
					<h1>this is check module</h1>
					<div className = 'form_info'>
						<div className = 'font'>name:</div>
						<input type = 'text' value = { name } name = 'name' onChange = { this.handleChange }/>
						<div className = 'clear'></div>
					</div>
					<div className = 'form_info'>
						<div className = 'font'>age:</div>
						<input type = 'text' name = 'age' onChange = { this.handleChange }/>
						<div className = 'clear'></div>
					</div>
					<div className = 'form_info'>
						<div className = 'font'>sex:</div>
						<input type = 'radio' name = 'sex' className = 'form_sex' defaultChecked = 'true'/><span>boy</span>
						<input type = 'radio' name = 'sex' className = 'form_sex'/><span>girl</span>
						<div className = 'clear'></div>
					</div>
					<div className = 'form_info'>
						<div className = 'font'>email:</div>
						<input type = 'text'/>
						<div className = 'clear'></div>
					</div>
					<div className = 'form_info'>
						<button onClick = { this.subForm }>submit</button>
					</div>
				</div>
			</div>
			)
	}
}
export default Check;