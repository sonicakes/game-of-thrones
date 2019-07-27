import React, {Component} from 'react';
import Results from './data.json'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Items extends Component {
   
 

 
 
    

  render(){

    return (
        <div className="App">

        <Container>
        <Row>
           
       

        
     {Results[0]._embedded.episodes.map((item, key) => (
        <Col xs="4">
            
            

        <Card  key={key}>
    <Card.Img variant="top" src={item.image.medium} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      {item.summary}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Date Aired: {item.airdate}</small><br/>
      <small className="text-muted">Season: {item.season}</small><br/>
      <small className="text-muted">Episode: {item.number}</small>
    </Card.Footer>
  </Card>
  </Col>
                   

       
    ))}
    

    </Row>
    </Container>
         
    </div>
    
    )
    
  
  }
}

export default Items;
