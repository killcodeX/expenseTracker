import React, {useState} from 'react';

export default function AddTransaction() {

    const [ Text, setText ] = useState('');
    const [ Amount, setAmount ] = useState(0);

    let acceptValues = (e) => {
        e.preventDefault();
        console.log('from text',Text)
        console.log('from amount',Amount)
        alert('form is submiting',Amount)
    }

    return (
        <>
            <h3 className='title is-4 has-text-centered'>Add new Transaction</h3>
              <form onSubmit={acceptValues}>
                <div className='box' id='addTransaction'>
                    <div class="field">
                        <label class="label">Text</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" value={Text} onChange={e => setText(e.target.value)} placeholder="Enter description..." />
                            <span class="icon is-small is-left">
                                <i class="fas fa-keyboard"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Amount</label>
                        <label class="label">(negative-expense, positive-income)</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" value={Amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
                            <span class="icon is-small is-left">
                                <i class="fas fa-dollar-sign"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <button class="button is-link" type='submit'>Add Transaction</button>
              </form>  
        </>
    )
}
