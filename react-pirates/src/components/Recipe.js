import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Recipe.css';

class Recipe extends Component {
  render(){
    const { details } = this.props;
    // const linkUrl = `/detail/${this.props.index}`;
    let linkUrl = `/detail/${this.props.index}?name=${details.title}`;

    // console.log(linkUrl)
    return (
      <div className='recipe-preview'>
       <h2><Link to={linkUrl}>{details.title}</Link></h2>
       <img src={process.env.PUBLIC_URL + '/img/' + details.image} alt="recipe" width="20%"/>
       <p>{details.description}</p>
       <span onClick={() => this.props.removeRecipe(this.props.index)}>✖︎</span>
       </div>
     
      )
  }
}
export default Recipe;