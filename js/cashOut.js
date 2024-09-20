document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutAmount = getInputFieldValueById('cash-out-amount');
     const pinNumber = getInputFieldValueById('cash-out-pin');

     if(isNaN(cashOutAmount)){
        alert('failed to cash out')
        return;
     }

     if(pinNumber === 1234){
        const balance = getTextFieldValueById('balance');

        if(cashOutAmount > balance){
            alert('You do not have sufficient balance')
            return;
        }
        const CashOutNewBalance = balance - cashOutAmount;
        const ultimateBalance = document.getElementById('balance').innerText = CashOutNewBalance;
       
        // cash out history added in transaction histroy
       const p = document.createElement('p');
       p.classList.add('bg-yellow-300');
       p.innerText = `Cash Out: ${cashOutAmount} tk. New Balance: ${ultimateBalance}`;
       document.getElementById('transaction-container').appendChild(p)
        
     }
     else{
        alert('try again later')
     }
    
    
})