
const Row = ({currency})=>{
    return <tr>
    <td>{currency.exchangeType}</td>
    <td>{currency.buy}</td>
    <td>{currency.sell}</td>
    <td>{currency.diff}</td>
  </tr>
}

export default Row;