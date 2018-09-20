import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import ProfileBubble from './ProfileBubble';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FIN FEELS</h1>
        </header>
        <div><Link to='/profileA'>Profile A</Link></div>
        <ProfileBubble pid={0} name="Jamie Corr" location="Los Angeles" emotion="happy" description="" timeStamp="2018-09-20T08:57:27" image=""/>
      </div>
    );
  }
}

export default App;
