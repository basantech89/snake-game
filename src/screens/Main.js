import React from 'react';
import Game from "./Game"
import { Switch, Route, Redirect } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" component={Game} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
};
export default Main;