import React from "react";
import {Route, Switch} from "react-router-dom";
import {SandBox} from "./screens/sandBox";
import {MainScreen} from "./screens/mainScreen";
import {Loader} from "./components/loader";
import './css/variables.css'
import './css/font.css'
import {Resume} from "./screens/resume";
import {MapScreen} from "./screens/map";

export const SANDBOX_ROUTE = '/sandbox';
export const LOADER_ROUTE = '/loader';
export const RESUME_ROUTE = '/resume';
export const MAP_ROUTE = '/map';


function App () {
        return (
                <Switch>
                    <Route path={SANDBOX_ROUTE}>
                        <SandBox />
                    </Route>
                    <Route path={LOADER_ROUTE}>
                        <Loader/>
                    </Route>
                    <Route path={RESUME_ROUTE}>
                        <Resume />
                    </Route>
                    <Route path={MAP_ROUTE}>
                        <MapScreen/>
                    </Route>
                    <Route path="/">
                        <MainScreen />
                    </Route>
                </Switch>
        );
    }

export default App;