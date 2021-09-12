import Note from "./Note"
import UserContext from "./App"
import { useContext } from "react"

const NoteList=({notes,handleRemove,setData})=>{

    return(
        
            <div>
                {notes.map((note)=>(
                    
                        <Note note={note} handleRemove={handleRemove}></Note>
                    
                    
                    ))}
            </div>
            
        
    )
    
    
}

export default NoteList