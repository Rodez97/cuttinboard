import React, { Component } from 'react';
import Axios from 'axios';
import ChampionsListComponent from './ChampionsListComponent';

class ChampionsComponent extends Component{
    state = {
        champsData : []
    };

    componentDidMount(){
        Axios.get('http://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion.json')
        .then((result)=>{
            const rawData = result.data.data;
            console.log(rawData);
            var res = [];

            var keys = Object.keys(rawData);
            keys.forEach((key)=>{
                res.push(rawData[key]);
                console.log(rawData[key]);
            });

            this.setState({
                champsData: res
            })
        }).catch(console.log)
    }

    render() {

        const { champsData } = this.state;

        return (
            <ChampionsListComponent campeones={champsData} />
        )
    }
}

export default ChampionsComponent;