import React from 'react'

export default function AddTransaction() {
    return (
        <>
            <h3 className='title is-4 has-text-centered'>Add new Transaction</h3>
              <form>
                <div className='box' id='addTransaction'>
                    <div class="field">
                        <label class="label">Text</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="Enter description..." />
                            <span class="icon is-small is-left">
                                <i class="fas fa-keyboard"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Amount</label>
                        <label class="label">(negative-expense, positive-income)</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="Enter amount..." />
                            <span class="icon is-small is-left">
                                <i class="fas fa-dollar-sign"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <button class="button is-link" type='submit'>ADD TRANSACTION</button>
              </form>  
        </>
    )
}
