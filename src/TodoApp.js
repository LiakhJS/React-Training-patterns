import React from "react";

function Todo(props) {
    return (
        <div className="main-wrap">
            <h1>Todo-application</h1>
            {props.children}
        </div>
    );
}

class Counters extends React.Component {
    render() {
        return (
            <div>
                <p id="more-to-do">{this.props.lengthOfLi}
                    <span> tasks is more to do</span>
                </p>
                <p id="done">{this.props.lengthOfLi}
                    <span> tasks is done</span>
                </p>
            </div>
        );
    }
}

function FilterButtons() {
    return (<div>
        <button>
            ALL
        </button>
        <button>
            IMPORTANT
        </button>
        <button>
            DONE
        </button>
    </div>
    );
}


class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = { items: ['Hello', 'its very important task', 'hi'], value: '' };
        this.handleChangeImput = this.handleChangeImput.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
        this.filterList = this.filterList.bind(this);
    }

    onTextChanged(e) {
        var text = e.target.value.trim();   // удаляем пробелы
        this.filterList(text); // передаем введенный текст в родительский компонент
    }

    addItem() {
        this.state.items.push(this.state.value);
        this.setState({ items: this.state.items });
    }
    handleChangeImput(event) {
        this.setState({ value: event.target.value })
    }
    filterList(text) {
        var filteredList = this.state.items.filter(function (item) {
            return item.toLowerCase().search(text.toLowerCase()) !== -1;
        });
        this.setState({ items: filteredList });
    }
    render() {
        const list = this.state.items.map((items, index) => {
            return <li key={index}>Task number {index + 1}. {items}</li>;
        });
        return (
            <div>
                <Counters lengthOfLi={this.state.items.length} />

                <input placeholder="Поиск" onChange={this.onTextChanged} />;

                <ul>
                    {list}
                </ul>
                <input type="text" value={this.state.value} onChange={this.handleChangeImput} />
                <button onClick={this.addItem.bind(this)}>добавить</button>
            </div>
        );
    }
}

class TodoApplication extends React.Component {
    render() {
        return (
            <Todo>
                <FilterButtons />
                <TodoApp />
            </Todo>
        );
    }
}

export default TodoApplication;
