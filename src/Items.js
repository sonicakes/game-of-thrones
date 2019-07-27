import React, {Component} from 'react';
import Results from './data.json'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


class Items extends Component {
  render(){
    return (
        <div className="App">
<Row className="py-3">


{Results.map((res) => (
<Col xs="3">
    <Image fluid src={res.image.medium}>

    </Image>
</Col>
       ))}

    {Results.map((num) => (
     <Col xs="9">
        <Card>
  <Card.Header as="h5">{num.name}</Card.Header>
  <Card.Body>
    <Card.Title>Rating: {num.rating.average}, Genres: {num.genres}</Card.Title>
    <Card.Text>
    {/* getting rid of html from JSON response */}
{num.summary.replace(/<\/?[^>]+>/gi, '')} 
    </Card.Text>
    <Button className="text-center" variant="flat">Official Site</Button>
  </Card.Body>
</Card>
</Col>
            ))}
   
</Row>

        <Row>
           
    
     {Results[0]._embedded.episodes.map((item, key) => (
        <Col className="mb-3" xs="4">
            
            

        <Card  key={key}>
    <Card.Img variant="top" src={item.image.medium} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      {/* getting rid of html from JSON response */}
      {item.summary.replace(/<\/?[^>]+>/gi, '')}
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
 
         
    </div>
    
    )
    
  
  }
}

export default Items;
