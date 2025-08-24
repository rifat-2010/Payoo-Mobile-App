const validPinNumber = 1234;
// add money feature
document.getElementById('add-money-btn').addEventListener('click', function(e){
    let bank = document.getElementById('bank').value
    let accounNumber = document.getElementById('acount').value
    let amount = parseInt(document.getElementById('add-amount').value)
    let pin = parseInt(document.getElementById('pin-number').value)
    console.log(bank, accounNumber, amount, pin)
    let availableBalance = parseInt(document.getElementById('available-balance').innerText)
    if(accounNumber.length < 11){
        alert('please provide your valid account number')
        return;
    }
    if(pin.length < 4 || pin != validPinNumber){
        alert('please provide your valid pin Number')
        return;
    }

    let totalNewAvailableBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
    
})


// cashout feature
document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    let amount = parseInt(document.getElementById('withdraw-amount').value)

    let availableBalance = parseInt(document.getElementById('available-balance').innerText)

    let totalNewAvailableBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})


// transfer feature
document.getElementById('transfer-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    let amount = parseInt(document.getElementById('transfer-amount').value)

    let availableBalance = parseInt(document.getElementById('available-balance').innerText)

    let totalNewAvailableBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})





// toggling feature
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('Cashout-parents').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('Cashout-parents').style.display = 'block'
    document.getElementById('add-money-parent').style.display = 'none'
})
document.getElementById('transfer-button').addEventListener('click', function(){
    document.getElementById('transfer-parents').style.display = 'block'
    document.getElementById('Cashout-parents').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none'
})