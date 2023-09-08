import { useEffect, useState } from "react"

export default function Users(){
    const [users,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            <h3>User:{users.length}</h3>
        </div>
    )
}

// 1.declar a state to hold to data
//  useEffect with call back and dpendency array
// use fetch to load daa