import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const StyledDiv = styled.div`
  color : blue
`;

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export function DisplayNome(props){
  return(
    <StyledDiv>
      <p>Hello {props.nome}</p>
    </StyledDiv>
  )
}

