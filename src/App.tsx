import React from "react";
import {Route, Switch} from "react-router-dom";
import {SandBox} from "./screens/sandBox";
import {MainScreen} from "./screens/mainScreen";
import {Loader} from "./components/loader";
import './css/variables.css'
import './css/font.css'

function App () {
        return (
                <Switch>
                    <Route path='/sandbox'>
                        <SandBox />
                    </Route>
                    <Route path={'/loader'}>
                        <Loader/>
                    </Route>
                    <Route path="/">
                        <MainScreen />
                    </Route>
                </Switch>
        );
    }

export default App;