import React, { Component} from "react";  
import CardList from "./component/CardList";
import {SearchBox} from "./component/SearchBox";
import "./App.css";

import {onsearchChangeAction,getListAction} from "./statemanagement/Actions"
import {connect} from "react-redux"

// (connect from the state from store)
//tell provider the name that we want for the props using obj(map) 
const mapStateToProps = (state) => {
    return{
    searchField : state.onSeachChangeReducer.searchField,
    list : state.getListReducer.list,
    isPending : state.getListReducer.isPending
}}

//define the function that app.js is going to use and how it relate to Action
//then tell provider the name that we want for the props using obj(map)
const mapDispatchToPros = (dispatch) =>{
    return {
            //onsearchChange is the function that recieve event
    onsearchChange : (event) => dispatch(onsearchChangeAction(event.target.value)) , // related by the event value will use to set the action state
    getList : () => dispatch(getListAction())
}}

class App extends Component{

    componentDidMount() {
        this.props.getList();
    }

    render(){
        console.log(this.props.list);
        var searchByNameList = this.props.list.filter((robot) => (robot.name.toLowerCase()).includes(this.props.searchField.toLowerCase()));
        return (<div className = "tc">
            <h1 className = "f1">RoboFriends</h1>
            <SearchBox handler = {this.props.onsearchChange}></SearchBox>
            <CardList list={searchByNameList}></CardList>
            </div>);         
    }
}
        
export default connect(mapStateToProps,mapDispatchToPros)(App);  