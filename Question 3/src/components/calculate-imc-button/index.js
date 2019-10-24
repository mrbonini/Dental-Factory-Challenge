import React from 'react'

function calculateImcButton() {
    const calculatePatientsIMC = () => {
        let patientsRegistered = document.querySelectorAll('.paciente')
    
        for(let i = 0; i < patientsRegistered.length; i++) {
            let patientWeight = patientsRegistered[i].querySelector('.info-weight');
            let patientHeight = patientsRegistered[i].querySelector('.info-height');
            let patientIMC = patientsRegistered[i].querySelector('.info-imc');

            let invalidWeight = false;
            let invalidHeight = false;

            if( (patientHeight.textContent <= 0 || patientHeight.textContent >= 3) && (patientWeight.textContent <= 0 || patientWeight.textContent > 300) ){
                invalidHeight = true;
                invalidWeight = true;
                patientIMC.textContent = "Altura e peso inválidos";
                patientsRegistered[i].classList.add('invalid-info');

            } else if( patientHeight.textContent <= 0 || patientHeight.textContent >= 3 ) {
                invalidHeight = true;
                patientIMC.textContent = "Altura inválida";
                patientsRegistered[i].classList.add('invalid-info');

            } else if( patientWeight.textContent <= 0 || patientWeight.textContent > 300 ) {
                invalidWeight = true;
                patientIMC.textContent = "Peso Inválido"
                patientsRegistered[i].classList.add('invalid-info');

            } else if( invalidWeight == false && invalidHeight == false ) {
                patientIMC.textContent = calculateImc(patientWeight.textContent, patientHeight.textContent);
            
            };
        };
        function calculateImc(weight, height) {
            let imc = (weight / (height * height)).toFixed(2);
            return imc
        };
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={calculatePatientsIMC}>Calcular IMC dos Pacientes</button>
        </div>
    );
};

export default calculateImcButton;