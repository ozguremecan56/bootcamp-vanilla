import "./App.css"

const Note = ({note,handleRemove})=>{
    return(
        <div>
            <div class="note">
                <p>{note.text}</p>
                <button onClick={()=>handleRemove(note.id)}>Delete</button>
                
            </div>

                <br></br>
                <br></br>
            
        </div>
    )
}

export default Note;