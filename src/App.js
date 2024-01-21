import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './page/Login';
import Signup from './page/Signup';
import Main from './page/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page:''
    };
  }

  movePage(target) {
    this.setState({
      page: target
    });
  }
  
  render() {
    let page;
    switch(this.state.page) {
      case 'login':
        page = <Login movePage={(target) => this.movePage(target)} />;
        break;
      case 'signup':
        page = <Signup movePage={(target) => this.movePage(target)} />;
        break;
      case 'main':
        page = <Main movePage={(target) => this.movePage(target)} />;
        break;
      default:
        page = <IniPage movePage={(target) => this.movePage(target)} />;
    }
    return(
      <div className="App">
        <header className="App-header">
          {page}
        </header>
      </div>
    )
  }
}

function IniPage(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <button onClick={() => props.movePage('login')}>MOVE</button>
      </header>
    </div>
  );
}

export default App;
