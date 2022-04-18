
const array = [];
console.log(array.lenght);

while(array.lenght < 6 || array.lenght == undefined){
    const num = parseInt(prompt('inserisci numero'));
    
    if(num % 2){
        array.push(num);
        console.log(array);
    }
}