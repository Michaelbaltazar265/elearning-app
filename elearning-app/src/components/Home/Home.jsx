import "./home.css";
import React from "react"; 
import HomeImage from './HomeImage';
import CardCourse from './CardCourse'


const Home = () => { 
    return (
      <>
        <section className="main-page">
          <div className="container text-center">
              <HomeImage title="Welcome to E-learning" />
          </div>
        </section>
        < CardCourse />
        </>
      );
}
export default Home;