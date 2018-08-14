import React, { Component } from 'react';

class RecipeDetail extends Component {
  
  constructor(props){
    super(props);
    this.renderRecipe = this.renderRecipe.bind(this);
  }
  
  render() {
    //const recipes = this.props.recipes;
    return (
      <div className="site-wrap">
      <div  className="recipe-detail">
        {Object.keys(this.props.recipes).filter(
          recipe => {
            return recipe === this.props.match.params.id
          }
        ).map(this.renderRecipe)}
      
      </div></div>
    )
  }
  
  renderRecipe(key) {
    //const divStyle = {
    //  display: 'flex',
    //  border: '3px solid #bada55',
    //  padding: '0.5rem'
    //}
  
    const recipe = this.props.recipes[key]
    return (
      /*
      <div style={divStyle} key={key}>
      <h3>{recipe.name}</h3>
      <img src={process.env.PUBLIC_URL + '/img/' + recipe.image} alt="recipe" />
      <p>{recipe.description}</p>
      </div>
      */
      <div className="recipe-preview" key={key}>
      <h2>Recipe for {recipe.title}</h2>
      <img src={process.env.PUBLIC_URL + '/img/' + recipe.image} alt="recipe" />
      <h2>Ingredients</h2>
      <ul>
      {recipe.ingredients.map((v,i) => 
        <li key={i} >{v}</li>
        )}
     
      </ul>
      <h2>Instructions</h2>
      <ul>
      {recipe.preparation.map((v,i) => 
        <li key={i} >{v}</li>
        )}
      </ul>
      </div>
    )
  }
  
}

export default RecipeDetail;