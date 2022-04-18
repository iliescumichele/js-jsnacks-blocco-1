let result = 0;

for(i = 0; i < 5; i++){
    result += parseInt(prompt('Inserisci il numero'));
    console.log(result);
}

document.getElementById("h1").innerHTML = `la somma dei numeri inseriti è <strong>${result}<strong>`;