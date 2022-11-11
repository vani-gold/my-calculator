
 //SELLECTING ALL THE ELLEMENTS    
 const Num1 = document.querySelector('.one').innerHTML;
 const Num2 = document.querySelector('.two').innerHTML;
 const Num3 = document.querySelector('.three').innerHTML;
 const Num4 = document.querySelector('.four').innerHTML;
 const Num5 = document.querySelector('.five').innerHTML;
 const Num6 = document.querySelector('.six').innerHTML;
 const Num7 = document.querySelector('.seven').innerHTML;
 const Num8 = document.querySelector('.eight').innerHTML;
 const Num9 = document.querySelector('.nine').innerHTML;
 const Num0 = document.querySelector('.zero').innerHTML;
 const NumD = document.querySelector('.divide').innerHTML;
 const NumM = document.querySelector('.multiply').innerHTML;
 const NumS = document.querySelector('.minus').innerHTML;
 const NumA = document.querySelector('.add').innerHTML;
 const NumE = document.querySelector('.equale').innerHTML;
 const dot = document.querySelector('.dot').innerHTML;
 const screen = document.querySelector('.screen-font');
 const footer = document.querySelector('footer');
 const allNum = document.querySelectorAll('[number]').innerHTML;
 const h1 = document.querySelector('h1');
 const allNumber = document.querySelectorAll('.number');
 // const srow = document.querySelector('.row');

//     const ones = document.querySelector('.ones');
//     screen.addEventListener('mouseover', function(e){
//     if(e.target.classList.contains('number')){
//         const link = e.target;
//         const siblings = link.closest('.outer--calculator').querySelectorAll('.row');
//         siblings.forEach(el => {
//             if(el !== link) el.style.opacity = 0.5;
//         });
//     }
// })
// let storeNum =98;
// ADDING COOKIES AT THE FOOTER OF MY CAL;CULATOR
 const message = document.createElement('div');  //create a div
 message.classList.add('cookie-message'); //add a class name
 message.innerHTML = 'Welcome to Esibe Vanessa Calculator. I created it with love <button class="btn-close-cookies">Got it</button>'//input a text
 footer.append(message); //input location
 // Delelete the cookies
 document
 .querySelector('.btn-close-cookies')
 .addEventListener('click', function(){
     message.remove();
 }); 


// CLICK EVENTS AND FUNCTIONS FOR ALL BUTTONS
 function displayContent1(){
     document.querySelector(".one").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num1;
     // store locally
     const localStorage2 = localStorage.setItem('number1', '1');
     const storedSting = localStorage.getItem('number1');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(typeof(storeNum));
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
     });
   }
displayContent1()


 // const storedStin = localStorage.getItem('number3');
 // const storeNu = Number(storedStin);
 // console.log(storeNu)
 // let storeNum;
 // // console.log(storeNum*storeNu)


// an evenlistener fxn that takes takes the value and store locally then display it
 function displayContent2(){
     document.querySelector(".two").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num2;
     // store locally
     const localStorage2 = localStorage.setItem('number2', '2');
     const storedSting = localStorage.getItem('number2');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
     });
   }
displayContent2();

// an evenlistener fxn that takes takes the value and store locally then display it
 function displayContent3(){
     document.querySelector(".three").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num3;
     // store locally
     const localStorage2 = localStorage.setItem('number3', '3');
     const storedSting = localStorage.getItem('number3');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
   
     });
   }
displayContent3();

// an evenlistener fxn that takes takes the value and store locally then display it
 function displayContent4(){
     document.querySelector(".four").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num4;
     // store locally
     const localStorage2 = localStorage.setItem('number4', '4');
     const storedSting = localStorage.getItem('number4');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
   
     });
   }
displayContent4();

// an evenlistener fxn that takes takes the value and store locally then display it
function displayContent5(){
     document.querySelector(".five").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num5;
     // store locally
     const localStorage2 = localStorage.setItem('number5', '5');
     const storedSting = localStorage.getItem('number5');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
   
     });
   }
displayContent5();

// an evenlistener fxn that takes takes the value and store locally then display it
function displayContent6(){
     document.querySelector(".six").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num6;
     // store locally
     const localStorage2 = localStorage.setItem('number6', '6');
     const storedSting = localStorage.getItem('number6');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
   
     });
   }
displayContent6();

function displayContent7(){
     document.querySelector(".seven").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num7;
     // store locally
     const localStorage2 = localStorage.setItem('number7', '7');
     const storedSting = localStorage.getItem('number7');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;  
    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
        
     });
    
   }
  displayContent7();
 //   console.log(result7+result7);
let storedSting;


function displayContent8(){
     document.querySelector(".eight").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num8;
     // store locally
     const localStorage2 = localStorage.setItem('number8', '8');
    storedSting = localStorage.getItem('number8');
     // convert string to number
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
   
     });
   }
displayContent8();

 
function displayContent9(){
     document.querySelector(".nine").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num9;
     // store locally
     const localStorage2 = localStorage.setItem('number9', '9');
     storedSting = localStorage.getItem('number9');
     // convert string to number9
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }    
     });
   }
displayContent9();
     
function displayContent0(){
     document.querySelector(".zero").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = Num0;
     // store locally
     const localStorage2 = localStorage.setItem('number0', '0');
     const storedSting = localStorage.getItem('number0');
     // convert string to number9
     storeNum = Number(storedSting);
     h1.textContent.value = storeNum;    
     console.log(storeNum)
     console.log(localStorage);
     // adjecent html
     if(storeNum >= 0 ){
             h1.insertAdjacentText('beforeend',storeNum);
            console.log("i did it")
         }
     });
   }
displayContent0();

// signs and symbols
function displayContentD(){
     document.querySelector(".divide").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = NumD;
     // store locally
     const localStorage2 = localStorage.setItem('divide', '÷');
     const storedSting = localStorage.getItem('divide');
     h1.textContent.value = storedSting;    
     console.log(storedSting)
     console.log(localStorage);
     h1.insertAdjacentText('beforeend',storedSting);
     });
   }
displayContentD();

// signs and symbols
function displayContentM(){
     document.querySelector(".multiply").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = NumM;
     // store locally
     const localStorage2 = localStorage.setItem('multiply', 'x');
     const storedSting = localStorage.getItem('multiply');
     h1.textContent.value = storedSting;    
     console.log(storedSting)
     console.log(localStorage);
     h1.insertAdjacentText('beforeend',storedSting);
     });
   }
displayContentM();

// signs and symbols
function displayContentS(){
     document.querySelector(".minus").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = NumS;
     // store locally
     const localStorage2 = localStorage.setItem('minus', '−');
     const storedSting = localStorage.getItem('minus');
     h1.textContent.value = storedSting;    
     console.log(storedSting)
     console.log(localStorage);
     h1.insertAdjacentText('beforeend',storedSting);
     });
   }
displayContentS();

// signs and symbols
function displayContentA(){
     document.querySelector(".add").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = NumA;
     // store locally
     const localStorage2 = localStorage.setItem('add', '+');
   const storedSting = localStorage.getItem('add');
     h1.textContent.value = storedSting;  
     let sum =0;   
     if(storedSting === '+') {
      sum = sum;
     }
     console.log(storedSting)
     console.log(localStorage);
     h1.insertAdjacentText('beforeend',storedSting);
   //   return storedSting;
     });
   }
displayContentA();

// signs and symbols
function displayContentE(){
     document.querySelector(".equale").addEventListener('click', function(){
     const number2 = document.querySelector(".screen-font").value = NumE;
     // store locally
     const localStorage2 = localStorage.setItem('plus', '=');
   const storedSting = localStorage.getItem('plus');
     h1.textContent.value = storedSting;  

     // console.log(storedSting)
     console.log(typeof(storedSting));
     console.log(localStorage);
     h1.insertAdjacentText('beforeend',storedSting);
     });

   }
displayContentE();




// const arr = ['+', '-', '/', '*']
// arr.forEach((elem, i)=>{
//    console.log(`${elem} and ${i}`)
//    if(elem === '+'){
//       return hi;
//    }
//    if(elem === '-'){
//       return hello;
//    }
// })

// const opera = operator(2, 2);
// console.log(opera);








 document.querySelector(".dot").addEventListener('click', function(){
     const dotSign = document.querySelector(".screen-font").value = dot;
 });
