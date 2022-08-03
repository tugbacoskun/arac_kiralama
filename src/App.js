import './app.css';
import { Container, Row, Col } from 'reactstrap'
import { Routes, Route } from "react-router-dom"; 
import Cars from './Components/Cars'

import './util.js' 
function App() {
  return (

    <>
      <Container>
        
        <Row>
          <Col md="12">
            <Routes>
 
              <Route path="/" element={<Cars />} />//localhost:3000
        
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
