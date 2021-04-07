import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ChampionsComponent from './Components/ChampionsComponent';
import Home from './Components/Home';
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';

const Routes = () => {

    return (
        <div>
            <NavbarComponent />
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/champions" component={ChampionsComponent} />
                </Switch>
                <FooterComponent />
            </div>


        </div>

    );

}

export default Routes;