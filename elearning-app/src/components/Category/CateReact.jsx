import React from 'react';
// import ListOfCategories from './ListofCategory'; 
import CardList from './CardsList';
import './cards.css';
import './category.css';
import { Link } from "react-router-dom";

const CategorieList = [
    'React', 
    'JavaScript', 
    'HTML', 
    "CSS"
  ]; 

const CateReact = (props) => { 
 
    return ( 
        <>
        <div className="row justify-content-start cat-page ">
          <div className="col-4 cat-page-col  ">
            {/* <ListOfCategories/> */}
            <ul className="ul-cat-list">
          {CategorieList.map((val) => (
            // console.log(val.toLowerCase());
            <Link to={`/${val}`} >
            <li key={val}
             className="li-cat-list"
            >{val}</li>
            </Link>
          ))}
        </ul>
          </div>
          <div className="col-8">
            <div className='col'>
              
            <h2 className="text-center"> React Classes  </h2>
            </div>
             <CardList/>
          </div>
        </div>
      </>
    )
} 

export default CateReact;