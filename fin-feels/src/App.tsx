import * as React from 'react';
import './App.css';
import ProfileBubble from './ProfileBubble';

var girl = '/images/girl0.jpeg';
var boy = '/images/p1.jpeg';

class App extends React.Component {
  public render() {
    return (
      <div id="main">
        <div id="title">
          <div id="edit">
            <a href="swatch.html" class="btn btn-success btn-sml">
              <span class="glyphicon glyphicon-pencil"></span> 
            </a>
            <a href="preload.html" class="btn btn-danger btn-sml">
              <span class="glyphicon glyphicon-off"></span> 
            </a>
          </div>
          <div id="heading">
            <h1>FIN FEELS</h1>
          </div>
        </div>
        <div id="profiles"></div>
      </div>
    );
  }
}

export default App;
