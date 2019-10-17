import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from "./Game"


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