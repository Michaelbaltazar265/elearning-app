import React from 'react'; 
import './category.css';
import CardList from './CardsList';
import './cards.css';

class CategoryMain extends React.Component { 
  constructor(props){ 
    super();
    this.state = { 
      categorieList: [
        'React', 
        'JavaScript', 
        'HTML', 
        "CSS"
      ], 
      view: "main"
    }
     this.handleCateList = this.handleCateList.bind(this);
  } 

  
  handleCateList = (e) => { 

       const target = e.target.innerHTML;  
    this.setState({view: target});
  }
       
  

 
    
    
  


  render () { 
const view = this.state.view;

if ( this.state.view === "main"){ 
 
} else if (view === 'React'){ 
  return ( 

    <>
    <div className="row justify-content-start cat-page ">
      <div className="col-4 cat-page-col  ">
        {/* <ListOfCategories/> */}
        <ul className="ul-cat-list">
        {this.state.categorieList.map((val) => (
          <li key={val}
          onClick={this.handleCateList}
           className="li-cat-list"
          >{val}</li>
        ))}
      </ul>
      </div>
      <div className="col-8">
        <div className='col'>
        <h2 className="text-center"> {view} </h2>
        </div>
        <CardList listView={this.state.view } />
      </div>
    </div>
    </>

  )
}
  

else if (view === 'HTML'){ 
  
  return ( 

    <>
    <div className="row justify-content-start cat-page ">
      <div className="col-4 cat-page-col  ">
        {/* <ListOfCategories/> */}
        <ul className="ul-cat-list">
        {this.state.categorieList.map((val) => (
          <li key={val}
          onClick={this.handleCateList}
           className="li-cat-list"
          >{val}</li>
        ))}
      </ul>
      </div>
      <div className="col-8">
        <div className='col'>
        <h2 className="text-center"> {view} </h2>
        </div>
        <CardList listView={this.state.view }/>
      </div>
    </div>
    </>

  )
}

else if (view === 'JavaScript'){ 
  
  return ( 

    <>
    <div className="row justify-content-start cat-page ">
      <div className="col-4 cat-page-col  ">
        {/* <ListOfCategories/> */}
        <ul className="ul-cat-list">
        {this.state.categorieList.map((val) => (
          <li key={val}
          onClick={this.handleCateList}
           className="li-cat-list"
          >{val}</li>
        ))}
      </ul>
      </div>
      <div className="col-8">
        <div className='col'>
        <h2 className="text-center"> {view} </h2>
        </div>
        <CardList listView={this.state.view }/>
      </div>
    </div>
    </>

  )
}
else if (view === 'CSS'){ 
  return ( 

    <>
    <div className="row justify-content-start cat-page ">
      <div className="col-4 cat-page-col  ">
        {/* <ListOfCategories/> */}
        <ul className="ul-cat-list">
        {this.state.categorieList.map((val) => (
          <li key={val}
          onClick={this.handleCateList}
           className="li-cat-list"
          >{val}</li>
        ))}
      </ul>
      </div>
      <div className="col-8">
        <div className='col'>
        <h2 className="text-center"> {view} </h2>
        </div>
        <CardList listView={this.state.view } />
      </div>
    </div>
    </>

  )
}
    return ( 

      <>
      <div className="row justify-content-start cat-page ">
        <div className="col-4 cat-page-col  ">
          {/* <ListOfCategories/> */}
          <ul className="ul-cat-list">
          {this.state.categorieList.map((val) => (
            <li key={val}
            onClick={this.handleCateList}
             className="li-cat-list"
            >{val}</li>
          ))}
        </ul>
        </div>
        <div className="col-8">
          <div className='col'>
          <h2 className="text-center"> Checkout our list and see what classes we have to offer </h2>
          </div>
        </div>
      </div>
      </>

    )
  }
}

export default CategoryMain;