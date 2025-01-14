import "./App.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import {UserContext} from "./App"

const Note = ({note,handleRemove})=>{

    const {setData} = useContext(UserContext)

    const handleShow = ()=>{
        
        console.log(note.text)
        setData(note.text)
    }

    return(
        <div>
            <div class="note">
                <p>{note.text}</p>
                <button onClick={()=>handleRemove(note.id)}>Delete</button>
                <Link to={`/post/${note.id}`} ><button onClick={handleShow}>Show</button></Link>
            </div>
                
                <br></br>
                <br></br>
                
        </div>
    )
}

            

export default Note;