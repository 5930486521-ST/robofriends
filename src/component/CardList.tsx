import React from "react"
import Card from "./Card";
import { Robot } from '../App'

const CardList = ({ list }: { list: Robot[] }) =>{
    return (<div>
        {list.map((x)=><Card key={x.id} id={x.id} name={x.name} 
                                            username={x.username} email={x.email}></Card> )}
    </div>);
}

export default CardList