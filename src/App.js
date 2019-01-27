import React, { Component } from 'react';
import './Styling/App.scss';
import Homepage from './Components/Homepage'

// Technical Decisions

// The initial thought was to create a more scalable and decoupled application, so to provide a more solid foundation for the future. Therefore, the state was governed by two entities, the App, and the Ratings, given that these are the two components which either interact with the user, or require outside data. In developing, I have realized some of the limits of Codepen, and such approach would have made a big negative impact on the reviewer, who would have been required to read at many files. Therefore, I opted to rewrite the application and change some of the MVC base intent in order to provide ease of readability. Given also the small size of the project, this would have been the better choice.

// Posts are self contained, and once again, reflect these simple design decisions.

class App extends Component {
  render() {
    return (
      <div className="App">
      <Homepage />
      </div>
    );
  }
}

export default App;
