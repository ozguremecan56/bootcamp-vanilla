import Note from "./Note"

const NoteList=({notes,handleRemove})=>{

    return<div>
        {notes.map((note)=>(<Note note={note} handleRemove={handleRemove}></Note>))}
    </div>
}

export default NoteList