import "./App.css";
import Header from "./component/Header";
import Container from "./component/Container";

function App() {
  return (
    <div className="App">
      <Header title="Text Convetor" home="Home" about="About" />
      <Container title="Enter Text To Convert" preview="Your Text summary" />
    </div>
  );
}

export default App;
