import Row from "./Row"

const CurrencyTable = ({currencies})=>{

    return(
    <table>
      <thead>
        <tr>
          <th>Döviz Cinsi</th>
          <th>Alış(TL)</th>
          <th>Satış(TL)</th>
          <th>Fark(%)</th>
        </tr>
        
      </thead>
      
        {currencies.map((currency) =>(<Row currency={currency}></Row>))}

    </table>
    )
    
}

export default CurrencyTable;