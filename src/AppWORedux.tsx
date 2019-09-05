import React, { Component} from "react";  
import CardList from "./component/CardList";
import { Robot } from "./App";

import {SearchBox} from "./component/SearchBox";
import "./App.css";

type State = {
    list: Array<Robot>,
    searchField: string
}

class App extends Component<{}, State>{
    constructor(props: any){
        super(props);
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
    // or onsearchChange:React.ChangeEventHandler<HTMLInputElement>
    onsearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({searchField: event.target.value})
    }

    render(){
        var searchByNameList: Array<Robot> = this.state.list.filter((robot) => (robot.name.toLowerCase()).includes(this.state.searchField.toLowerCase()));
        return (<div className = "tc">
            <h1 className = "f1">RoboFriends</h1>
            <SearchBox handler = {this.onsearchChange}></SearchBox>
            <CardList list={searchByNameList}></CardList>
            </div>);         
    }
}
        
export default App;  