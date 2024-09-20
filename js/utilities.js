// common shared function here

// console.log('utilities loaded');

// function getInputFieldValueById() {
//     console.log('wil get value by id');
//     const addMoney = document.getElementById('amount').value;
//     return addMoney;

// }

function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  return inputValue;

}
