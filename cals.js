let a = '' ; // первое число
let b = '' ; // второе число
let sign = '' // знак операции 
let finish = false;


const digit = ['0', '1', '2', '3', '4', '5', '6', '7','8','9','.'];
const action = ['-','+','X','÷'];


// экран 

const result = document.querySelector('.calc-scren p');




function clearAll (){
    a = '';
    b = '';
    sign = '';
    finish = false;
    result.textContent = 0; 
}

document.querySelector('.AC').onclick = clearAll; 

document.querySelector('.buttons').onclick = (event) => {
   if (!event.target.classList.contains('btn')) return;
   if (event.target.classList.contains('AC')) return; 
   
   result.textContent = '';
   const key = event.target.textContent;
   

   if (digit.includes(key)) {
       if (b ==='' && sign ==='') {
       a+=key;
       console.log (a, b , sign); 
       result.textContent = a;
       } 
       else if (a!=='' && b!=='' && finish) {
           b = key;
           finish = false ;
           result.textContent = b; 

    }
    
   
    else {
        b += key ;
        result.textContent = b;
    
    }
   
    }


    if (action.includes(key)) {
      sign = key;
      result.textContent = sign;
      return;
    }


    // нажата = 
    if (key === '=') {
        if (b==='') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;

            case '-':
                a = a - b;
                break;        

            case 'X':
                a = a * b;
                break;

            case '÷':
                a = a / b;
                break;    
                
        }
        finish = true; 

    result.textContent = a;

    }
}


