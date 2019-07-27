import React, {Component} from 'react';
import Items from './Items';
import './index.css';
import Container from 'react-bootstrap/Container';
class App extends Component {
  
  render(){
    return (
        <div className="App">
            <Container>
            <Items />
            </Container>
 
  
        </div>
    );
    }
  
  }
export default App;
