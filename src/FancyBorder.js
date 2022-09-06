// Некоторые компоненты можно рассматривать как «частные случаи» других компонентов. Например, 
//WelcomeDialog может быть частным случаем Dialog.
// В React это можно сделать через композицию, 
//где «частный» вариант компонента рендерит более «общий» и настраивает его с помощью пропсов:
import React from "react";

function FancyBorder(props) {
    return (
        <div className={"FancyBorder FancyBorder-" + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue"> //red, blue, green
            <h1>
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
            {props.children}

        </FancyBorder>

    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            login: event.target.value
        })
    }
    handleSubmit() {
        alert(`
        Welcome, ${this.state.login} !
        `)
    }
    render() {
        return (
            <Dialog title='Hello , my dear friend!'
                text='We are glade to see u here.'>
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Click me!
                </button>
            </Dialog>
        );
    }
}

export default SignUpDialog;


