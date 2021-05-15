import React from "react";
import "./category.css";
import CardList from "./CardsList";
import imagecss from "./../../images/css.png";
import imagejs from "./../../images/js-page.png";
import imageReact from "./../../images/react-js-featured-image.jpeg";
import imageHtml from "./../../images/html-page.jpg";
import "./cards.css";
import image from "./../../images/learn-html-and-css-copy.png";
import { Link } from "react-router-dom";

class CategoryMain extends React.Component {
  constructor(props) {
    super();
    this.state = {
      categorieList: ["React", "JavaScript", "HTML", "CSS"],
      view: "main",
    };
    this.handleCateList = this.handleCateList.bind(this);
  }

  handleCateList = (e) => {
    const target = e.target.innerHTML;
    this.setState({ view: target });
  };

  render(props) {
    const view = this.state.view;

    if (this.state.view === "main") {
    } else if (view === "React") {
      return (
        <>
          <div className="row justify-content-start cat-page ">
            <div className="col-4 cat-page-col  ">
              {/* <ListOfCategories/> */}
              <ul className="ul-cat-list">
                {this.state.categorieList.map((val) => (
                  <li
                    key={val}
                    onClick={this.handleCateList}
                    className="li-cat-list"
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-8">
              <div className="col">
                <img
                  className="react-images "
                  src={imageReact}
                  alt="javascript"
                />
              </div>
              <CardList listView={this.state.view} />
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/feedback">
                  <button type="button" className="btn btn-success feeback-cat">
                    FeedBack
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    } else if (view === "HTML") {
      return (
        <>
          <div className="row justify-content-start cat-page ">
            <div className="col-4 cat-page-col  ">
              <ul className="ul-cat-list">
                {this.state.categorieList.map((val) => (
                  <li
                    key={val}
                    onClick={this.handleCateList}
                    className="li-cat-list"
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-8">
              <div className="col">
                <img
                  className="react-images "
                  src={imageHtml}
                  alt="javascript"
                />
              </div>
              <CardList listView={this.state.view} />
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/feedback">
                  <button type="button" className="btn btn-success feeback-cat">
                    FeedBack
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    } else if (view === "JavaScript") {
      return (
        <>
          <div className="row justify-content-start cat-page ">
            <div className="col-4 cat-page-col  ">
              
              <ul className="ul-cat-list">
                {this.state.categorieList.map((val) => (
                  <li
                    key={val}
                    onClick={this.handleCateList}
                    className="li-cat-list"
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-8">
              <div className="col">
                <img className="js-images" src={imagejs} alt="javascript" />
              </div>
              <CardList listView={this.state.view} />
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/feedback">
                  <button type="button" className="btn btn-success feeback-cat">
                    FeedBack
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    } else if (view === "CSS") {
      return (
        <>
          <div className="row justify-content-start cat-page ">
            <div className="col-4 cat-page-col  ">
              {/* <ListOfCategories/> */}
              <ul className="ul-cat-list">
                {this.state.categorieList.map((val) => (
                  <li
                    key={val}
                    onClick={this.handleCateList}
                    className="li-cat-list"
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-8">
              <div className="col">
                <img src={imagecss} alt="css-class" />
              </div>
              <CardList listView={this.state.view} />
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/feedback">
                  <button type="button" className="btn btn-success feeback-cat">
                    FeedBack
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="row justify-content-start cat-page cat-first-page">
          <div className="col-4 cat-page-col  ">
            <ul className="ul-cat-list">
              {this.state.categorieList.map((val) => (
                <li
                  key={val}
                  onClick={this.handleCateList}
                  className="li-cat-list"
                >
                  {val}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-8">
            <div className="col">
              <img className="cat-main-img" src={image} alt="" />
            </div>
          </div>
          <div className="row">
              <div className="col-12">
                <Link to="/feedback">
               
                  <button type="button" className="btn btn-success feeback-cat" >
                    FeedBack
                  </button>
                </Link>
              </div>
            </div>
        </div>
      </>
    );
  }
}  

export default  CategoryMain;
