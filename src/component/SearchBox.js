import React from "react"

export const SearchBox = ({handler}) =>{
    return <div className = "p2">
        <input onChange={handler} className="pa3 bs b--green bg-lightest-blue"  
                type="search" placeholder="seach robots by name"></input>
    </div>
}