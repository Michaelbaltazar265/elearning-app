import React from "react"; 
import './cards.css';
import Cards from "./Cards";


 
const CardList =(props)=> {  
    return ( 
        <>
        <div className='row'>
  <div className='row justify-content-between card-row'>
  <Cards view={props.listView} />
  </div>
  </div>
  </>
    )
}

export default CardList;