import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import base from './base';
import Header from './components/Header';
import Recipe from './components/Recipe';
import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail';
import NavBar from './components/NavBar';

import recipesFile from './data/sample-recipes-object';

//import './assets/css/styles.css';



class App extends Component {
  
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.state = {
      recipes: {}
    }
  }
  
  render() {
    return (
      <Router>
      <div className="App">
      <Header headerTitle="Recipes!" />
      
      <NavBar recipes={this.state.recipes} />
      
      <Switch>
      
      {/* <Route path='/detail/:id' 
    render={() => <RecipeDetail recipes={this.state.recipes} />} /> */}
    
    <Route path='/detail/:id'
    render={(props) => <RecipeDetail {...props} recipes={this.state.recipes}  />}
    />
    
    {/*<Route path='/foo' component={RecipeDetail} />*/}
    
    </Switch>  
    
    {
      Object.keys(this.state.recipes)
      .map( key => <Recipe
        key={key}
        index={key}
        details={this.state.recipes[key]}
        removeRecipe = {this.removeRecipe}
        />)
      }
      
      <RecipeForm
      recipes={this.state.recipes}
      updateRecipe={this.updateRecipe}
      addRecipe={this.addRecipe}
      loadSamples={this.loadSamples}
      />
      </div>
      </Router>
    );
  }
  
  addRecipe(recipe) {
    //take a copy of the current state and put it into recipes var
    const recipes = {...this.state.recipes}
    //create a unique id
    const timestamp = Date.now()
    //add new recipe using accessor and id - 
    // objectName["propertyName"] and assignment
    recipes[`recipe-${timestamp}`] = recipe
    //set state recipes with var recipes
    this.setState({ recipes: recipes })
  }
  
  loadSamples() {
    this.setState({recipes: recipesFile})
  }
  
  removeRecipe(key) {
    const recipes = { ...this.state.recipes }
    // delete recipes[key]
    recipes[key] = null;
    this.setState({recipes})
  }
  
  updateRecipe(key, updatedRecipe) {
    const recipes = { ...this.state.recipes }
    recipes[key] = updatedRecipe;
    this.setState({ recipes });
  }
  
  componentWillMount(){
    this.ref = base.syncState(`recipes`, {
      context: this,
      state: 'recipes'
    })
  }
  
  componentWillUmount(){
    base.removeBinding(this.ref)
  }
  
}

export default App;
