import "./App.css";
import { ViteComponent, MyComponent, ReactComponent } from "./components";

function App() {
  return (
    <>
      My components:
      <div>
        <ViteComponent />
        <ReactComponent />
      </div>
      <MyComponent />
    </>
  );
}

export default App;
