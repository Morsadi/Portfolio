
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { NoMatch } from './NoMatch';
import {Navigation} from './navBar';
class App extends Component {

  



  render(){
return (
          <React.Fragment>

            <Navigation  />
                <Router>
                    <Switch>    
                        <Route exact path="/" component={Home}/>
                        <Route path="*" component={NoMatch}/>
                    </Switch>
                </Router>
          </React.Fragment>
        )
    



}
}

export default App;
