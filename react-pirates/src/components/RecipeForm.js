import React, { Component } from 'react';
import AddRecipeForm from './AddRecipeForm';
import base from '../base';

class RecipeForm extends Component {

  constructor() {
    super()
    this.renderRecipes = this.renderRecipes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      uid: null
    }
  }

  authenticate(provider) {
    console.log(`Trying ${provider}`)
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData)
    if (err) {
      console.log(err)
      return
    }
    this.setState({
      uid: authData.user.uid
    })
  }

  render() {
    
    const logout = <button onClick={ () => this.logout()}>Log Out</button>

    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    return (
      <div className="recipe-form">
        {logout}
        <h3>Recipe Form Component</h3>
        {Object.keys(this.props.recipes).map(this.renderRecipes)}
        <AddRecipeForm addRecipe={this.props.addRecipe} />
        <button onClick={this.props.loadSamples}> Load Sample Recipes </button>
      </div>
      )
  }

  renderRecipes(key) {
    const recipe = this.props.recipes[key];
    return (
      <div key={key}>
        <p>{key}</p>
        <input value={recipe.name}
          onChange={ (e) => this.handleChange(e, key) }
          type="text" name="name" placeholder="Recipe Name"
        />
        <input value={recipe.date}
          onChange={ (e) => this.handleChange(e, key) }
          type="text" name="weapon" placeholder="Recipe Weapon" />
        <input value={recipe.description}
          onChange={ (e) => this.handleChange(e, key) }
          type="text" name="vessel" placeholder="Recipe Vessel" />
      </div>
    )
  }

  handleChange(e, key) {
    const recipe = this.props.recipes[key]
    // console.log(e.target.name, e.target.value)
    const updatedRecipe = {
      ...recipe, 
      [e.target.name]: [e.target.value]
    }
      this.props.updateRecipe(key, updatedRecipe)
  }

  renderLogin() {
    return (
      <div>
      <button onClick={ () => this.authenticate('github')} >Log in with Github</button>
      </div>
    )
  }

  componentDidMount() {
    base.onAuth((user) => {
      if (user) {
        this.authHandler(null, {user})
      }
    })
  }logout

  () {
    base.unauth();
    this.setState( {uid: null})
  }

}

export default RecipeForm;