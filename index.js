const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passwordOne = document.querySelector("#passOne")
let passwordTwo = document.querySelector("#passTwo")


function getRandomPassword() {
    let password = []
    for (let i = 0; i < 18; i++){
        password += characters[Math.floor (Math.random() *characters.length)]
    }
    return password
}

function generatePasswords(){
    passwordOne.textContent = getRandomPassword()
    passwordTwo.textContent = getRandomPassword()
   
}

function copyOne() {
    let copyText = document.getElementById("passOne");
    copyText.select();
    copyText.setSelectionRange(0, 99999);  
    navigator.clipboard.writeText(copyText.value);    
  }

  function copyTwo() {
    let copyText = document.getElementById("passTwo");  
    copyText.select();
    copyText.setSelectionRange(0, 99999);  
    navigator.clipboard.writeText(copyText.value);    
  }






// attempt one
// function generateString() {
//     passwordOne.textContent = []
//     passwordTwo.textContent = []

//     for (let i = 0; i < 15; i++) {
        
//         passwordOne.textContent += characters[Math.floor (Math.random() *characters.length)]
//         passwordTwo.textContent += characters[Math.floor (Math.random() *characters.length)]
 
//     }
// } 


// above works - but D.R.Y
// create getRandom() function and have it generate random password
// have let RandomPasswordOne & RandomPasswordOne = getRandom()
//



