// login button functionality
document.getElementById("loginButton").addEventListener("click", function () {
  
  const pinNumber = 1234;
  const mobileNumberVal = document.getElementById('mobile-number').value
  
  const pinNumberVal = parseInt(document.getElementById('pin-number').value)
  
  console.log(mobileNumberVal, pinNumberVal)

  if(mobileNumberVal.length === 14 && pinNumberVal === pinNumber){
    window.location.href='home.html'
  }else{
    alert('Invalid Credentials')
  }
});
