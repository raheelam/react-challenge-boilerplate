import styled from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

const AppWrapper = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  max-width: 300px;

  border: 1px #000 solid;
  border-radius: 6px;

  text-align: center;

  & > p {
    margin: 1rem 0 0 0;
  }
`;

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
