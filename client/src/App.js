import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RecipesList from './components/RecipesList';
import SpecificRecipe from './components/SpecificRecipe';
import RecipeProcedure from './components/RecipeProcedure'
class App extends Component {

  render() {
    
    return (
      <div>
        <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/recipes" component={RecipesList}/>
            <Route exact path="/recipes/:id" component={SpecificRecipe}/>
            <Route exact path="/recipes/:recipe_id/procedures" component={RecipeProcedure}/>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
