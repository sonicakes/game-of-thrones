import React, {Component} from 'react';
import Results from './data.json'


class Items extends Component {

 
 
  render(){
    return (
        <div className="App">
  
  {Results.map((itemDetail,index) => {
      return <h1>{itemDetail.name}</h1>
  })}
        </div>
    );
    }
  
  }
export default Items;
