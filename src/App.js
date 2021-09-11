import data from "./data"
import CurrencyTable from "./CurrencyTable";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <CurrencyTable currencies={data.currencies}></CurrencyTable>
        

      
    </div>
  );
}



export default App;
