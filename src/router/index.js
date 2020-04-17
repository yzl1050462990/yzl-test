import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Index from '../view/index/Index'

export default function IndexRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/zhaopin/index.htm" component={Index}/>
                <Redirect  from="/*" to="/zhaopin/index.htm"/>
            </Switch>
        </Router>
    )
}
