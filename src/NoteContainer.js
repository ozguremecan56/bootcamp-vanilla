import "./App.css"
import NoteList from "./NoteList"
import {useState} from "react"; 


    
  const NoteContainer = ({setData})=>{
  const [notes,setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState("");
  const [count, setCount] = useState(0)

  const handleInputChange = (event)=>{
    setCurrentNote(event.target.value)
  }

  const handleNoteRemove = (id)=>{
    let filtered=notes.filter(note=>note.id!==id)
    setNotes(filtered)
  }

  const onSubmit = (event)=>{
    if(currentNote===""){
      alert("Can't add an empty note.")
    }else{
      event.preventDefault();
    
    let tempNotes = notes;
    tempNotes.push({id:count, text:currentNote})
    setNotes(tempNotes)
    setCount(count+1)
    console.log(notes)
    setCurrentNote("")
    }
    
  }

  return(
    <div>
      <form onSubmit={onSubmit}>
      <textarea value={currentNote} onChange={handleInputChange}></textarea>
    <div>
      <button type="submit">Add note</button>
    </div>
      <br></br>
  </form>
    
  <NoteList setData={setData} notes={notes} handleRemove={handleNoteRemove}></NoteList>
</div>
  )
    
    
}

export default NoteContainer;