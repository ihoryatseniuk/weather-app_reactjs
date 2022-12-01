import classes from "./styles/App.module.css";
import Input from "./components/Input/Input.jsx";

function App() {
  return (
    <div>
      <h1 className={classes.header}>Weather App</h1>
      <Input />
    </div>
  );
}

export default App;
