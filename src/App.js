// import data from "./data"
// import CurrencyTable from "./CurrencyTable";
import "./App.css"
import NoteList from "./NoteList"
import {useState} from "react"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NoteContainer from "./NoteContainer";
import NoteDetails from "./NoteDetails";

const App = () => {

  const [data,setData] = useState("")
  
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path = "/">
              <NoteContainer setData={setData}/>
            </Route>
            <Route exact path = "/post/:id">
              <NoteDetails data={data}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
}
        

      



export default App;
