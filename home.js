const validPinNumber = 1234;
const transactionData = [];
// add money feature
document.getElementById('add-money-btn').addEventListener('click', function(e){
    let bank = document.getElementById('bank').value
    let accounNumber = document.getElementById('acount').value
    let amount = parseInt(document.getElementById('add-amount').value)
    if(amount <= 0 ){
        alert('Invalid Amount')
    }
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
    
    const date = {
        name : 'Add Monay', 
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(date)
    console.log(transactionData)
})


// cashout feature
document.getElementById('withdraw-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    let amount = parseInt(document.getElementById('withdraw-amount').value)

    let availableBalance = parseInt(document.getElementById('available-balance').innerText)
    if(amount <= 0 || amount > availableBalance){
        alert('Invalid Amount')
        return;
    }
    let totalNewAvailableBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance

    const date = {
        name : 'Cash Out', 
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(date)
    console.log(transactionData)
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

function togglingId(id){
    const froms = document.getElementsByClassName('from')
    for(const from of froms){
        from.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'


}




function handleButton(activeId) {
    const fromBTN = document.getElementsByClassName('from-btn');

    // Reset all buttons to default
    for (const btn of fromBTN) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.add('border-gray-300');
    }

    // Add active styles only to the clicked one
    const activeBtn = document.getElementById(activeId);
    activeBtn.classList.remove('border-gray-300');
    activeBtn.classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}
// add money
// document.getElementById('add-button').addEventListener('click', function(){
//     togglingId('add-money-parent')

//        handleButton('add-button')
   
// })
document.getElementById('transaction-button').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ""
    for(const date of transactionData){
      
        const div = document.createElement('div')
        div.innerHTML = `
         <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
        
          <div class="flex items-center">
            <div class=" p-3 rounded-full bg-[#f4f5f7]">
            <img
            src="assets/wallet1.png"
            alt="wallet1-image"
            class="mx-auto p-3"
          />
          </div>
          <div class="ml-3">
            <h2>${date.name}</h2>
            <p>${date.date}</p>
          </div>
          </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>`

      transactionContainer.appendChild(div)
    }
})



document.getElementById('add-button').addEventListener('click', function(){
    togglingId('add-money-parent');
    handleButton('add-button');
});

document.getElementById('cashout-button').addEventListener('click', function(){
    togglingId('Cashout-parents');
    handleButton('cashout-button'); 
});

document.getElementById('transfer-button').addEventListener('click', function(){
togglingId('transfer-parents')

  handleButton('transfer-button')
})

// get bonus
document.getElementById('getBonus-button').addEventListener('click', function(){
togglingId('getBonus-parents')

  handleButton('getBonus-button')
    
})
// pay money
document.getElementById('pay-button').addEventListener('click', function(){
togglingId('pay-parents')
handleButton('pay-button')
    
})
// transfer money
document.getElementById('transaction-button').addEventListener('click', function(){
togglingId('transaction-parents')

   handleButton('transaction-button')
    
})








