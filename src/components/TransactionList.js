import React from 'react'

export default function TransactionList() {
    return (
        <>
            <h3 className='title is-4 has-text-centered'>History</h3>
            <div className='box' id='transactionList'>
                <ul className="list">
                    <li className="minus">
                        Cash <span className='title is-5'>-$400</span><button className="delete">x</button>
                    </li>
                </ul>
            </div>
        </>
    )
}
