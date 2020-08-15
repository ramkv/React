import React, { Component } from 'react';
import { rfdc } from "rfdc";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link
} from "react-router-dom";

class App extends Component {

  // state = rfdc({tssdfsfd : 'asdfasdf'})
  
  Page404 = ({ location }) => (
    <div>
      <h2>No match found for <code>{location.pathname}</code></h2>
    </div>
  );

  render () {
    return (
      <BrowserRouter>
      <div className="App">
        
        <ol style={{textAlign: 'left'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li>Add a simple navigation with two links  One leading to "Users", one leading to "Courses"</li>
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (Your "Courses" page)</li>
        </ol>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Courses">About</Link>
              </li>
              <li>
                <Link to="/Users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Courses" component={Courses}></Route>
            <Route path="/Users" exact component={Users}></Route>
            <Route exact path="/all-courses">
              <Redirect to="/Courses" />
            </Route>
            <Route path="/" exact render={ () => <div/> } ></Route>
            <Route component={this.Page404} /> 
          </Switch>
      
      </div>
      </BrowserRouter > 
      
    );
  }
}

export default App;
