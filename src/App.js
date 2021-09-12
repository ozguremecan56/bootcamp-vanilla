// import data from "./data"
// import CurrencyTable from "./CurrencyTable";
import "./App.css"
import {useState, useContext, createContext} from "react"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NoteContainer from "./NoteContainer";
import NoteDetails from "./NoteDetails";

export const UserContext = createContext();

const App = () => {

  const [data,setData] = useState("")
  
    return(
      <div>
        <UserContext.Provider value={{data,setData}}>
        <Router>
          <Switch>
          
            <Route exact path = "/">
              <NoteContainer/>
            </Route>
            <Route exact path = "/post/:id">
                <NoteDetails/>
            </Route>
            
          </Switch>
        </Router>
        </UserContext.Provider>
        
      </div>
            
              
             
                

            
              

              
                  
              
            
    )
}
        
export default App
      





