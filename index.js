const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl=document.getElementById("buttonGeneratePassword")
let firstpasswordEl=document.getElementById("passwordGenerated1")
let secondpasswordEl=document.getElementById("passwordGenerated2")
passwordEl.addEventListener("click", function(){
    firstpasswordEl.textContent=""
    console.log(firstpasswordEl)
    for(let i=0;i<16;i++)
    {
        firstpasswordEl.textContent+=characters[Math.floor(Math.random()*characters.length)]
    }
     secondpasswordEl.textContent=""
    for(let i=0;i<16;i++)
    {
        secondpasswordEl.textContent+=characters[Math.floor(Math.random()*characters.length)]
    }
})



