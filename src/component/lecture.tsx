import React, { Component} from "react";  

class Lecture extends Component<{prop1: string}>{
    render(){                           //Component class : class with method render() 
        return (<h1 className = "">h1 as component | get prop value from the tag: {this.props.prop1}</h1>);         
        //render() return the component  JSX allow dev to return html component : a vitual DOM that react will convert it again and change it only downsteam
    } //use className instead of class 
}

               
//also can be a method
// const Lecture = (props) => {                         
//     return (<h1 className = "">component //get prop value from the tag: {props.prop1}</h1>);      
// } ;


export default Lecture;  //share class/file for other to import >> "export default {ClassName}" (index.js)