

export default function Friends({friend}){
 
    const {name,email} = friend;
    
    return(
        <div className="friend">
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
        </div>
    )
}