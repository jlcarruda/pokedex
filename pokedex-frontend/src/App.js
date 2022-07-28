// import logo from './logo.svg';

import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import NavBar from './components/layout/NavBar';
import SearchForm from './components/PokemonSearch';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <SearchForm />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
