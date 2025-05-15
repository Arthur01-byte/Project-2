const keys = Array.from(document.querySelector('.calculator').children)
const input = document.querySelector('input');

// console.log(keys);

let calculation = input.value;
let afterAnswer = false

for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    
    key.addEventListener('click', ()=> {
        if (key.innerHTML !== '=' && key.innerHTML !== 'sqrt' & key.innerHTML !== 'AC' & key.innerHTML !== 'Delete') {
            if (calculation == '0' || calculation == NaN || afterAnswer) {
                calculation = '';
                afterAnswer = false    
            }

            calculation += key.innerHTML;

            input.setAttribute('value', calculation);
            
        } else {
            if (key.innerHTML == 'AC') {
                calculation = '0';

                input.setAttribute('value', calculation);
                
            } else if (key.innerHTML == 'ᑉ') {
                if (calculation == 0) {
                    null;
                } else {
                    if (calculation.length === 1) {
                        calculation = calculation.slice(0, -1);
                        calculation = 0
                      } else {
                        calculation = calculation.slice(0, -1); // Remove last character
                      }

                    input.setAttribute('value', calculation);
                }
                                 
            } else if (key.innerHTML == '√') {
                if (calculation == 0) {
                    null
                }

                calculation = Math.sqrt(eval(calculation));

                if (calculation == NaN) {
                    calculation = 0
                }

                afterAnswer = true

                input.setAttribute('value', calculation);

            } else if (key.innerHTML === '=') {
                calculation = eval(calculation);

                afterAnswer = true

                input.setAttribute('value', calculation);
            }
            
        }
        
    })
    
}

