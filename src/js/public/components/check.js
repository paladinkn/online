





import React, { PropTypes, Component } from 'react';


class Check extends Component {
	state = {
		name: 'pal',
		age: '22',
		sex: 1,
		email: '11'
	}
	handleChange = (e) => {
		var newState = {};
			newState[e.target.name] = e.target.value;
		this.setState(newState);	
	}
	subForm = () => {
		var state = this.state;
		var jsonData = {
			name: state.name,
			age: state.age,
			sex: state.sex,
			email: state.email
		}
		jsonData = JSON.stringify(jsonData);
		console.log(jsonData);
	}
	render() {
		var { name, age, sex, email } = this.state;
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
						<input type = 'text' value = { age } name = 'age' onChange = { this.handleChange }/>
						<div className = 'clear'></div>
					</div>
					<div className = 'form_info'>
						<div className = 'font'>sex:</div>
						<input type = 'radio' name = 'sex' className = 'form_sex' value = '0' checked = { sex == 0 }  /><span>boy</span>
						<input type = 'radio' name = 'sex' className = 'form_sex' value = '1' checked = { sex == 1 }  onChange = { this.handleChange }/><span>girl</span>
						<div className = 'clear'></div>
					</div>
					<div className = 'form_info'>
						<div className = 'font'>email:</div>
						<input type = 'text' value = { email } name = 'email' onChange = { this.handleChange }/>
						<div className = 'clear' ></div>
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