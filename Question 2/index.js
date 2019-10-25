let name = prompt('Olá, qual seu nome?');

function getDivDimensions() {
    
    let divHeight = parseInt(prompt(`${name} gostaria de definir uma altura para a 1ª DIV? Caso sim, basta informar um valor maior que 0, ou caso não, basta deixar 0 ou apenas dar Ok.`));
    let divWidth = parseInt(prompt(`${name} gostaria de definir uma largura para a 1ª DIV? Caso sim, basta informar um valor maior que 0, ou caso não, basta deixar 0 ou apenas dar Ok.`));
    let myDivHeight = document.querySelector('.first-div');
    let myDivWidth = document.querySelector('.first-div');
    
    if(divHeight <= 0 || isNaN(divHeight) == true || divHeight < 100) {
        myDivHeight.style.height = "100%";
    } else if(divWidth <= 0 || isNaN(divWidth) == true || divWidth < 100) {
        myDivWidth.style.width = "100%";
    } else if(divHeight > 0 && divWidth > 0) {
        myDivHeight.style.height = `${divHeight}px`;
        myDivWidth.style.width = `${divWidth}px`;
    } else if(divHeight > 0 && divWidth <= 0) {
        myDivHeight.style.height = `${divHeight}px`;
        myDivWidth.style.width = "100%";
    }else if(divHeight <= 0 && divWidth > 0) {
        myDivHeight.style.height = "100%";
        myDivWidth.style.width = `${divWidth}px`;
    };
};

getDivDimensions();

let button = document.querySelector('.btn');
button.addEventListener('click', getDivDimensions);