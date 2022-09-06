import React from 'react';
const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>;
	}
	return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		// const tempFromProp = this.props.temperature;
		const scale = this.props.scale;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={this.props.temper}
				//значение value берется из переменной temper,
				//которое вычисляется из celsius/fahrengeight
					onChange={this.handleChange} />
			</fieldset>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = { temperature: '', scale: 'c' };
	}

	handleCelsiusChange(temper) {
	//передается значение temper={celsius}   из пропса 	<TemperatureInput/>
		this.setState({ scale: 'c', temperature: temper});
	}

	handleFahrenheitChange(temper) {
	//передается значение temper={fahreign}   из пропса 	<TemperatureInput/>
		this.setState({ scale: 'f', temperature: temper });
	}

	render() {
		const scale = this.state.scale;
		// const tempNameState = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(this.state.temperature, toCelsius) : this.state.temperature;
		const fahrenheit = scale === 'c' ? tryConvert(this.state.temperature, toFahrenheit) : this.state.temperature;

		return (
			<div>
				<TemperatureInput
					scale="c"
					temper={celsius}
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput
					scale="c"
					temper={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange} />
				<BoilingVerdict
					celsius={parseFloat(celsius)} />
			</div>
		);
	}
}
export default Calculator;
