import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Landingpage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome To Saas Tutorialspoint !!!!</h1>
                </header>
                <div style={{ display: 'flex', height: '60px', background: 'dimgray' }}>
                    <a href='/contact' id="navbar" className={"myotherclass"}>Contact Us</a>
                    <a href='/about' id="navbar" className={"myotherclass"}>About Us</a>
                </div>

                <h3 style={{
                    marginTop: 0, height: '30px'
                }}>Understanding concepts of styling</h3>
                <p class="class1">Welcome to saas !!!</p>
                <p class="class2">A solution of all technology.</p>
            </div>
        );
    }
}

export default Landingpage;
