

const Note = ({note,handleRemove})=>{
    return(
        <div>
            <div>{note.text}</div>
            <button onClick={()=>handleRemove(note.id)}>Delete</button>
        </div>
    )
}

export default Note;