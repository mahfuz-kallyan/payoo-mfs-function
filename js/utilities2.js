function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSectionById(id){
    // hide all the section
    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('cash-out').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden')
}