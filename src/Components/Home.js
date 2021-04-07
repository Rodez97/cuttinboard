import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';

const Home = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <HeaderComponent Nombre="Alex Danilo" Prof="Programador" Notas="Aprendiendo ReactJS" />
            </header>
            <Link to="/champions">Ver Campeones</Link>
        </div>
    )
}

export default Home;