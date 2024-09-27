function getId(id){
    const input = document.getElementById(id);
    return input;
}

function getValue(num){
    const idOfValue = document.getElementById(num).innerText;
    const value = parseFloat(idOfValue);
    return value;
}