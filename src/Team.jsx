import { useState } from "react"

export default function Team(){
   const [team,setTeam]=useState(11)
   
   const addTeamhandle =()=>{
    const newTeam = team+1
    setTeam(newTeam)
   }
   const reduceTeamhandle=()=>{
    const newTeam = team-1 
    setTeam(newTeam)
   }
   const teamStyle ={
    border:"2px solid purple",
    margin:"10px",
    padding:'10px'
   }

    return (
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={addTeamhandle}>AddTeam</button>
            <button onClick={reduceTeamhandle}>ReduceTeam</button>
        </div>
    )
}