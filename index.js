

///////////////////////////////////////////////////
//conversor de decimal para romano

const btnRoman = document.querySelector("#romanid")
let btnRomanResult = document.querySelector("#romanresult")

btnRoman.addEventListener('keyup', (e) => {  validateRoman(e.target.value)})

//função responsável por converter o numero para algarismo romano 
function convert( num ) {         
        const romanToNum = {
            M: 1000,   CM:  900,
            D: 500,  CD: 400,
            C: 100,    XC:90,
            L:50,   XL: 40,
            X: 10,     IX: 9,
            V: 5,   IV:4,
            I: 1     
        }    
        let roman = ""

        for( let key in romanToNum ) {       
            while(num >= romanToNum[key]) {           
                roman += key          
                num -= romanToNum[key]           
            }
        }    
        return   showValue(roman,btnRomanResult)   
}
//função responsavel por mostar o valor na tela
function showValue(value, buttom ) {      
    buttom.setAttribute('value', value)   
}
//função responsavel por checar se o numero é menor do que 3.999
function validateRoman( roman) {
    let romanV = parseInt(roman)
    if (romanV <= 3999 ) {
        convert( roman )
    }     
}
  

 ///////////////////////////////////////////////////
//conversor de romano para decimal 

const btnDecimal = document.querySelector("#decimalid")
let btnDecimalResult = document.querySelector("#decimalresult")

btnDecimal.addEventListener('keyup', (e) => { validadeDecimal(e.target.value)})

const romanToDecimal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
    
  function romanToInt(num) {
      
   let accumulator = 0;
  for (let i = 0; i < num.length; i++) {
      if (num[i] === "I" && num[i + 1] === "V") {
        accumulator += 4;
        i++;
      } else if (num[i] === "I" && num[i + 1] === "X") {
        accumulator += 9;
        i++;
      } else if (num[i] === "X" && num[i + 1] === "L") {
        accumulator += 40;
        i++;
      } else if (num[i] === "X" && num[i + 1] === "C") {
        accumulator += 90;
        i++;
      } else if (num[i] === "C" && num[i + 1] === "D") {
        accumulator += 400;
        i++;
      } else if (num[i] === "C" && num[i + 1] === "M") {
        accumulator += 900;
        i++;
      } else {
          accumulator += romanToDecimal[num[i]];
      }
    }
    showValue(accumulator,btnDecimalResult)
  }

  function validadeDecimal(decimal) {
      
      const pattern =/[I|V|X|L|C|D|M]/g
      const pattern1 = /(VV|LL|DD)/
      const pattern2 =/(IIII|XXXX|CCCC|MMMM)/
      
     
      const validator = pattern.test(decimal)
      
      const validator1 = pattern1.test(decimal)
     
      const validator2 = pattern2.test(decimal)
      
      if(validator === !validator1 === !validator2) {
        romanToInt(decimal)
      }
  }
  
