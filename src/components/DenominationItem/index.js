import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList
  const totalUpdate = () => {
    balanceDeduction(value)
  }
  return (
    <li className="list-cont1">
      <div>
        <button className="btn" onClick={totalUpdate} type="button">
          {value}
        </button>
      </div>
    </li>
  )
}
export default DenominationItem
