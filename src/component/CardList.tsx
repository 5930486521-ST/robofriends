import React from "react"
import Card from "./Card";

const CardList = ({list}) =>{
    return (<div>
        {list.map((x)=><Card key={x.id} id={x.id} name={x.name} 
                                            username={x.username} email={x.email}></Card> )}
    </div>);
}

export default CardList