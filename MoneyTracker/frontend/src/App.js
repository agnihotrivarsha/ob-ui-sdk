// frontend/src/App.js

import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import Header from './view/Header'
import Footer from './view/Footer'
import Home from './view/Home'
import Dashboard from './view/Dashboard'
import Profile from './view/Profile'
import AboutUs from './view/AboutUs'
import ContactUs from './view/ContactUs'
import AccountList from './view/AccountList'
import AccountInfo from './view/AccountInfo'

const App = () => {
  const [data, setData] = useState([]);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); */

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />      
        <div className="section-content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/accounts" component={AccountList} />
              <Route exact path="/account/:id" component={AccountInfo} />
              <Route exact path="/contact-us" component={ContactUs} />
              {/* <Route exact path="/loading" component={Loader} /> */}
             {/*  <Route
                  exact
                  path="/redirecting"
                  render={() => <Redirecting />}
              />
              <PrivateRoute
                  exact
                  path="/aisp"
                  render={() => <Accounts />}
              />
              <PrivateRoute
                  exact
                  path="/pisp"
                  render={() => <Payments />}
              />
              <Route path="*" component={NotFound} /> */}
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
