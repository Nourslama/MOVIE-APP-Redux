import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import MovieApp from '../components/movieList'
import Details from '../components/detail'

const router =() => (
    <Router>
        <Switch>
            <Route path="/" exact component={MovieApp} />
            <Route path="/detail/:id"  component={Details} />

        </Switch>
    </Router>
)

export default router;