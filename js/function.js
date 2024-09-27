function getId(id){
    const input = document.getElementById(id);
    return input;
}
function create(id){
    const input = document.createElement(id);
    return input;
}

function getValue(num){
    const idOfValue = document.getElementById(num).innerText;
    const value = parseFloat(idOfValue);
    return value;
}


function donation(num1,num2,num3,num4){
    let mainBalance = getValue('balance');
    const firstInput =parseFloat(getId(num1).value);
    const time = new Date();
   
    if (firstInput > 0 && firstInput <= mainBalance && !isNaN(firstInput))
        {
        let mainBalanceId = getId('balance');
        const newMainBalance = mainBalance - firstInput;
        mainBalanceId.innerText = newMainBalance;
        let firstSecBalance = getValue(num2);
        const donated = firstInput + firstSecBalance;
        let firstSecBalanceId = getId(num2);
        firstSecBalanceId.innerText = donated;
        getId(num1).value = "";
        
        let modal = getId(num3);
        modal.showModal();

        const history = getId('history');
        const newDiv = create('div');
        newDiv.classList.add('border-2','lg:p-6','p-4','rounded-xl','mx-3'); 
        const newP = create('p');
        newP.classList.add('text-xl','font-bold')
        newP.innerText =`${firstInput} Taka is Donated for ${num4}, Bangladesh. `;
        const newP2 = create('p');
        newP2.classList.add('mt-3','opacity-75','bg-slate-100','p-3','rounded-lg')
        newP2.innerText = `Date: ${time}`
        newDiv.append(newP,newP2);
        history.append(newDiv);
        

    }
        else{
            alert('Wrong Input')
            getId(num1).value = "";
        }
    }
