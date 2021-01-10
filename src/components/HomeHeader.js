import React from 'react';
import logo from '../logo.svg';


const HomeHeader = () => {

        return(
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Flickr Search Tool - React </h1>

          </header>
        );

}

export default HomeHeader;