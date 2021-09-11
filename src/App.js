import data from "./data"
import CurrencyTable from "./CurrencyTable";
import "./App.css"
import NoteList from "./NoteList"
import {useState} from "react"; 


const App = () => {
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
    event.preventDefault();
    
    let tempNotes = notes;
    tempNotes.push({id:count, text:currentNote})
    setNotes(tempNotes)
    setCount(count+1)
    console.log(notes)
  }

  return (
    <div className="App">
      <CurrencyTable currencies={data.currencies}></CurrencyTable>

      <form onSubmit={onSubmit}>
        <textarea onChange={handleInputChange}></textarea>
        <div>
          <button type="submit">Add note</button>
        </div>
        
      </form>
      <NoteList notes={notes} handleRemove={handleNoteRemove}></NoteList>

      
      
    </div>
  );
}
        

      



export default App;
