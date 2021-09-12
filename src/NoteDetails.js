import { Link } from "react-router-dom"
import "./noteDetails.css"
import { useContext } from "react"
import { UserContext } from "./App"



const NoteDetails = ()=>{
    
    const {data} = useContext(UserContext)
    

    return(
        <div className="noteWrapper">
            <div className="note">
                {data}
                <div><Link to="/"><button>Back</button></Link></div>
            </div>
        </div>
        

    )


}

export default NoteDetails