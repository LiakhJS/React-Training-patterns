import React from "react";
class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    alert ('Name :' + this.state.selectOptions);
    e.preventDefault();
  }
  handleChange(e) {
    let value = Array.from(e.target.selectedOptions, option => option.value);
      this.setState({
        selectOptions: value
      });
    }
  //HTMLSelectElement.selectedOptions 
  //HTMLSelectElement.selectedIndex 
  // let name = e.target.name
  // let value = Array.from(target.selectedOptions, option => option.value);
  // this.setState({
  //   [name]: value
  // });  
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
         <label>
         Press CMD to Check a few flavor:
        <select name="selectOptions" multiple={true} onChange={this.handleChange}  value={this.state.selectOptions} >
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

export default MultipleSelect;