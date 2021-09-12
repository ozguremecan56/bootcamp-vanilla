import Note from "./Note"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

const NoteList=({notes,handleRemove,setData})=>{

    return(
        
            <div>
                {notes.map((note)=>(<Link to={'notes/' + note.id}>
                    <Note setData={setData} note={note} handleRemove={handleRemove}></Note>
                    </Link>))}
            </div>
            
        
    )
    
    
}

export default NoteList