import React from "react";
class FlavorSelectForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: ['']};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value:event.target.value})};
    handleSubmit(event) {
        alert ('Name :' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
               <form onSubmit={this.handleSubmit}>
               <label>
               Check flavor:
                    <select  value={this.state.value} onChange={this.handleChange}>
                        <option selected value='coconut'>Coconut</option>
                        <option selected value='mango'>Mango</option>
                        <option value='pineapple'>Pineapple</option>
                    </select>
               </label>
               <input type='submit' value='Submit button'/>       
               </form>
               
         );
    }
}

export default FlavorSelectForm;