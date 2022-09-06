function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Алиса" />
        <Welcome name="Базилио" />
        <Welcome name="Буратино" />
      </div>
    );
  }
  export default App;