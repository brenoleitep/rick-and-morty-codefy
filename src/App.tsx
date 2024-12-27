import { Outlet } from "react-router-dom";
import { Container } from "./styles/global";

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
