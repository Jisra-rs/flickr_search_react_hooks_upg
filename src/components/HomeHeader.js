import React, {Component} from 'react';
import logo from '../logo.svg';


class HomeHeader extends Component{

    render() {
        return(
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
{/*             <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React con isra
            </a> */}
            <h1>Flickr Search Tool</h1>

          </header>
        );
    }
}

export default HomeHeader;