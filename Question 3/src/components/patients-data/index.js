import React from 'react';
import CalculateImcButton from '../calculate-imc-button';

function DataPatient() {
    return (
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <h2 className="mt-5 text-center">MrBonini's Patients List</h2>
            <table className="table col-sm-12 col-lg-6">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Peso (Kg)</th>
                        <th scope="col">Altura (m)</th>
                        <th scope="col">IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="paciente">
                        <td className="info-name">Paulo</td>
                        <td className="info-weight">150</td>
                        <td className="info-height">1.93</td>
                        <td className='info-imc'></td>
                    </tr>
                    <tr className="paciente">
                        <td className="info-nome">Junior</td>
                        <td className="info-weight">80</td>
                        <td className="info-height">1.75</td>
                        <td className="info-imc"></td>
                    </tr>
                    <tr className="paciente">
                        <td className="info-nome">Beatriz</td>
                        <td className="info-weight">47.5</td>
                        <td className="info-height">1.63</td>
                        <td className="info-imc"></td>
                    </tr>
                    <tr className="paciente">
                        <td className="info-nome">Kaique</td>
                        <td className="info-weight">90</td>
                        <td className="info-height">1.75</td>
                        <td className="info-imc"></td>
                    </tr>
                </tbody>
            </table>
            <CalculateImcButton/>
        </div>
    )
};

export default DataPatient;