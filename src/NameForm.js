import React from "react";
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'введите имя'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState( {value: event.target.value});
    }
    handleSubmit(event) {
        alert ('Name :' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit"  value="Отправить форму" />
                <br/> <br/>
                <label>
                    Сочинение:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}
export default NameForm;