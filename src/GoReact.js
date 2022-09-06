
function Item(props) {
    return <li>{props.message}</li>;
  }
  
  function TodoList() {
    const todos = ['закончить документацию', 'отправить пулреквест', 'снова напомнить Дэну про ревью'];
    return (
      <ul>
        {todos.map((message) => <Item key={message} message={message} />)}
      </ul>
    );
  }

  export default TodoList;





 
 


