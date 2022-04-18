
const num1 = parseInt(prompt('Inserisci il primo numero'));
const num2 = parseInt(prompt('Inserisci il secondo numero'));



if(num1 > num2){
    document.getElementById("h1").innerHTML = `il numero <strong>${num1}<strong> è > di ${num2}`;
}else{
    document.getElementById("h1").innerHTML = `il numero <strong>${num2}<strong> è > di ${num1}`;

}