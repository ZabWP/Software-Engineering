import "./App.css";
import { DescriptionBox } from "./components/DescriptionBox";

// "() => {}" creates a function and stores it into the variable "App"
const App = () => {
  return (
    <div>
      <h1 className="Title">React App</h1>
      <DescriptionBox />
      <DescriptionBox />
      <DescriptionBox />
    </div>
  );
};

export default App;
