import { useEffect, useState } from "react"
import './Friend.css'
import Friends from "./Friends"

export default function Friend(){
    const [friend,setFriend]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])

    return(
        <div className="friend">
            <h3>Best Friend:{friend.length}</h3>
   {friend.map(friend=><Friends friend={friend}></Friends>)}
        </div>
        
    )
}