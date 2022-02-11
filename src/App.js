import "./App.css";
import { Container } from "react-bootstrap";
import Todos from "./components/Todos";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Container>
        <Todos />
        <Counter />
      </Container>
    </>
  );
}

export default App;
