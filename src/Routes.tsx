import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CountriesList from './pages/CountriesList'
import Country from './pages/CountryCart'

// import Home from './pages/Home'
// import Product from './pages/Product'

const Routes = () => (
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    {/* <Route exact path="/products/:id" component={Product} /> */}

    <Route exact path="/" component={CountriesList} />

    {/*Route for handling product page*/}
    <Route exact path="/country/:id" component={Country} />
  </Switch>
)

export default Routes
