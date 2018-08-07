import React, { Component } from 'react';

import '../assets/css/AddRecipeForm.css';

class AddRecipeForm extends Component {
  render(){
    return (
      <div>
      <h4>Add Recipe Form</h4>
      <form
        ref={ (input) => this.recipeForm = input }
        onSubmit={(e) => this.createRecipe(e)
        }>
        <input ref={ (input) => this.title = input } type="text" placeholder="Recipe title" />
        <input ref={ (input) => this.date = input } type="text" placeholder="Recipe date" />
        <input ref={ (input) => this.description = input } type="text" placeholder="Recipe description" />
        <input ref={ (input) => this.ingredients = input } type="text" placeholder="Recipe ingredients (delimit w/ commas)" />
        <input ref={ (input) => this.preparation = input } type="text" placeholder="Recipe preparation (delimit steps w/ commas)" />
        <button type="submit">Add Recipe</button>
      </form>
      </div>
    )
  }

  createRecipe(e) {
    e.preventDefault();
    
    let arrIngredients = this.ingredients.value.split(',');
    let arrSteps = this.preparation.value.split(',');
   
     
    const recipe = {
      title: this.title.value,
      date: this.date.value,
      description: this.description.value,
      ingredients: arrIngredients,
      preparation: arrSteps

    }
    this.props.addRecipe(recipe)
    this.recipeForm.reset();
    // console.log(recipe)
  }

}

export default AddRecipeForm;

/*
name: 'burnttoast0001',
        title: 'Burnt Toast',
          date: '2018-07-02',
          description: 'The perfect food for when you\'ve completely given up and no longer care what you put in your body.',
          image: 'burnt_toast.jpg',
          ingredients: [
            'sliced bread', 'knife', 'apathy'
          ],
          preparation: [
            {step: 'Place bread in toaster.'},  {step: 'Toast.'}, {step: 'Ignore until toast is burnt.  Serves: none'}
          ]

*/