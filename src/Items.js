import React, {
    Component
} from 'react';
//importing Data.json stored locally to access the results 
import Results from './data.json'
//importing only the components we need for the classes on this page from react-bootstrap library
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

//button switch component
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // This binding btnToggle method to make the callback work. Official React documentation was used as a refernce source here: https://reactjs.org/docs/handling-events.html
        this.btnToggleClicked = this.btnToggleClicked.bind(this);
    }

    btnToggleClicked = () => {

        // Change the toggle state in Toggle class
        // React will render the button again
        this.setState({
            isToggleOn: !this.state.isToggleOn,
        });

        // Call the method that was supplied when we create Toggle class
        // This will reverse the state.episodes in Items class
        this.props.methodToReverseEpisodes();
    }

    render() {
        return ( <button onClick = {
                this.btnToggleClicked
            } > {
                this.state.isToggleOn ? 'NEWEST' : 'OLDEST'
            } </button>
        );

    }
}

class Items extends Component {

    state = {
        episodes: Results[0]._embedded.episodes.reverse()
    };

    reverseEpisodes = () => {
        const oldEpisodes = this.state['episodes'];
        const newEpisodes = oldEpisodes.reverse();
        this.setState({
            episodes: newEpisodes
        });
    }

    render() {

        //sorting posts by airdate from json. toggling ascending/descending order by reversing the default array order
        return (
        <div className = "App" >
            <Row className = "py-3" > {Results.map((res) => ( 
                <Col xs = "3" >
                    <Image fluid src = {res.image.medium} ></Image> 
                    </Col>
                ))
            }

            
                {Results.map((num) => ( <Col xs = "9" >
                    <Card >
                    <Card.Header as = "h4" > {num.name} </Card.Header>
                     <Card.Body > 
                        {/* TODO in future: write a method to map through genres array and diplay with a space to avid repetiveness */ } 
                        <Card.Title > Rating: {num.rating.average}, Genres: {num.genres[0]}, {num.genres[1]}, {num.genres[2]} 
                        </Card.Title> 
                    <Card.Text > 
                        {/* getting rid of html from JSON response */ } 
                        {num.summary.replace(/<\/?[^>]+>/gi, '')} 
                        </Card.Text> 
                    <Button className = "text-center"
                    variant = "flat"
                    href = {num.officialSite}
                    target = "_blank" > Official Site </Button> 
                    </Card.Body> 
                    </Card> 
                    </Col>
                ))}

            </Row>

            
                { /*Creating a Toggle class, tell it to reverse episodes by calling items.reverseEpisodes */ } 
                
                { /* We are in the Item class, so this = item */ } 
                <Toggle methodToReverseEpisodes = {this.reverseEpisodes}/>

            
                {/* the row below will display episode cards by order */ } 
                <Row>
                 {this.state.episodes.map((item, key) => ( 
                    <Col className = "mb-3"xs = "4">
                    <Card key = {key} >
                    <Card.Img variant = "top"src = {item.image.medium}/> 
                    <Card.Body >
                    <Card.Title > {item.name} </Card.Title> 
                    <Card.Text > 
                        {/* getting rid of html from JSON response */ } 
                        {item.summary.replace(/<\/?[^>]+>/gi, '')} 
                        </Card.Text> 
                        </Card.Body> 
                        <Card.Footer><small className = "text-muted" > Date Aired: {item.airdate} </small><br/ >
                    <small className = "text-muted" > Season: {item.season} </small><br/ >
                    <small className = "text-muted" > Episode: {item.number} </small> 
                    </Card.Footer> 
                    </Card> 
                    </Col>
                ))
            } </Row> 
             </div>
        )
    }
}

export default Items;