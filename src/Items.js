import React, {Component} from 'react';
import Results from './data.json'


class Items extends Component {
   
 

 
 
    

  render(){

    return (
        <div className="App">
   

     <ul>
                
                    
                    {Results[0]._embedded.episodes.map((item, key) => (
        <li key={key}>Hello, {item.name} from {item.id}!</li>
    ))}
            </ul>
    </div>
    )
    
  
  }
}

export default Items;
