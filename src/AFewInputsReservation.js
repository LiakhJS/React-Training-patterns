import React from "react";
class AFewInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxName: null,
            numberInput: 5
            };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        
        this.setState({ 
            [name]:value
            });
    }
    handleSubmit(event) {
        alert ('Name :'  + this.state.checkboxName + ' ' + this.state.numberInput );
        event.preventDefault();
      }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
            NAME: 
            <input name="checkboxName" 
            type="checkbox" 
            value={this.state.checkboxName} 
            onChange={this.handleInputChange} />
            </label>
            
            <label>
            NAME: 
            <input name="numberInput" 
            type="number" 
            value={this.state.numberInput} 
            onChange={this.handleInputChange} />
            <input type='submit' value='Submit button'/>       
            </label>
            
         </form>
        );
    }
}

export default AFewInputs;