import React, { Component} from "react";  
import CardList from "./component/CardList";
// import {robots} from "./component/robots";
import {SearchBox} from "./component/SearchBox";
import "./App.css";

class App extends Component{
    constructor(){
        super();
        this.state = {
            // list : robots
            list : [],
            searchField: ""
        };
    }
    //Using API
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({list:users}));
    }
    onsearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        var searchByNameList = this.state.list.filter((robot) => (robot.name.toLowerCase()).includes(this.state.searchField.toLowerCase()));
        return (<div className = "tc">
            <h1 className = "f1">RoboFriends</h1>
            <SearchBox handler = {this.onsearchChange}></SearchBox>
            <CardList list={searchByNameList}></CardList>
            </div>);         
    }
}
        
export default App;  