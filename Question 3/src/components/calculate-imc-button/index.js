import React from 'react';

function calculateImcButton() {
    const calculatePatientsIMC = () => {
        let patientsRegistered = document.querySelectorAll('.paciente');
    
        for(let i = 0; i < patientsRegistered.length; i++) {
            let patientWeight = patientsRegistered[i].querySelector('.info-weight');
            let patientHeight = patientsRegistered[i].querySelector('.info-height');
            let patientIMC = patientsRegistered[i].querySelector('.info-imc');

            patientIMC.textContent = calculateImc(patientWeight.textContent, patientHeight.textContent);
            
            };
        };
        
        function calculateImc(weight, height) {
            let imc = (weight / (height * height)).toFixed(2);
            return imc
        };

    return (
        <div>
            <button className="btn btn-primary" onClick={calculatePatientsIMC}>Calcular IMC dos Pacientes</button>
        </div>
    );
};

export default calculateImcButton;