import React from 'react'

export default function IncomeExpense() {
    return (
        <div className="columns">
            <div className="column">
                <div className='box'>
                    <h4 className='inc-exp has-text-centered'>Income</h4>
                    <p className="money-plus has-text-centered">+$0.00</p>
                </div>
            </div>
            <div className='column'>
                <div className='box'>
                    <h4 className='inc-exp has-text-centered'>Expense</h4>
                    <p className="money-minus has-text-centered">-$0.00</p>
                </div>
            </div>
        </div>
    )
}
