(function() {

let myArray = [];

function write(content) {
    docufament.write(content);
    document.write('<br>');
    document.write('<br>');
};

function getRandomNumber() {
    return Math.round(Math.random() * 100);
};

function getArraySize() {
    let sizeSuitable = false;
    while(sizeSuitable == false) {
        let size = parseInt(prompt('Informe o tamanho da Array para analisar. OBS: Informe um valor maior que 2!'));
        if(size < 2) {
            alert('Lembre-se o tamanho da Array precisa ser maior que 2!');
        } else {
            sizeSuitable = true;
            return size;
        };
    };
};

function createMyArray() {
    let arraySize = getArraySize();
    while(myArray.length < arraySize) {
        randomNumber = getRandomNumber()
        myArray.push(randomNumber);
    };
    write(myArray);
};

function showSecondHighestNumber() {
    const highestNumber = Math.max(...myArray);
    let repeated = false;
    while(repeated == false) {
        if(myArray.indexOf(highestNumber) >= 0) {
            myArray.splice(myArray.indexOf(highestNumber), 1);
        } else {
            repeated = true;
            let secondHighestNumber = Math.max(...myArray)
            write(`O segundo maior número da array é ${secondHighestNumber}`);
        };
    };
};


createMyArray();

showSecondHighestNumber();

}) ();