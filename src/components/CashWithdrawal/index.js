// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {total: 2000}

  balanceDeduction = value => {
    this.setState(preValue => ({total: preValue.total - value}))
  }

  render() {
    const denominationsList = this.props

    const {total} = this.state

    return (
      <div className="main-cont">
        <div className="card-cont">
          <div className="prof-cont">
            <div className="let-round">
              <h1 className="letter">s</h1>
            </div>

            <h1 className="head">Sarah Williams</h1>
          </div>

          <div className="balance-cont">
            <p className="para">Your Balance</p>

            <div>
              <p className="total-card">{total}</p>

              <p className="para">In Rupees</p>
            </div>
          </div>

          <div className="withdraw-cont">
            <p className="withdraw">Withdraw</p>

            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <div>
            <ul className="btn-list">
              {denominationsList.map(eachValue => (
                <DenominationItem
                  denominationsList={eachValue}
                  key={eachValue.id}
                  balanceDeduction={this.balanceDeduction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
