import React from 'react';
import Game from "./Game";
import Game2 from "./Game2"
import { Switch, Route, Redirect } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" component={Game2} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
};
export default Main;