import { Callback } from "./Callback/Callback";
import ReducerCom from "./Reducer/ReducerCom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.div`
  & ${Link}{
   box-sizing: border-box;
   display: block;
   padding: 4px 8px;
   margin: 0 auto;
  }
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <StyledLink>
        <Link>안녕</Link>
      </StyledLink>
    </div>
  );
}

export default App;
