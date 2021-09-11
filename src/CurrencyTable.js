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
        <Row currency={currencies[0]}></Row>
        <Row currency={currencies[1]}></Row>
        <Row currency={currencies[2]}></Row>
      </thead>
      </table>
    )
    
}

export default CurrencyTable;