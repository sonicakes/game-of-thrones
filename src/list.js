
  import React from 'react';



const List = () => (
    <ul>
      {jsonResult.map(item => (
        <li key={item.id}>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.color}</div>
          <div>{item.price}</div>
        </li>
      ))}
    </ul>
    
   
  );
  
  export default List;
