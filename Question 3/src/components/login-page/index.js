import React from 'react';
import DataPatient from '../patients-data/index';

function Login() {
    
    const [state, setState] = React.useState();

    const checkLogin = (event) => {
        event.preventDefault();

        let myForm = document.querySelector('#myForm');
        let registeredUser = "mrbonini";
        let registeredPassword = "Kaique123";
        let inputedUser = myForm.login.value;
        let inputedPassword = myForm.password.value;

        if(inputedUser === registeredUser && inputedPassword === registeredPassword) {
            alert(`Bem vindo ao Sistema Dr. ${inputedUser}`);
            setState(DataPatient)
        } else if(inputedUser !== registeredUser && inputedPassword !== registeredPassword) {
            alert("Login e Senha inválidos!");
        } else if(inputedUser !== registeredUser) {
            alert("Login inválido!");
        } else {
            alert("Senha inválida!");
        };
    };

    return (
        <div className="row justify-content-center login-box" id="main">
            <div className="container col-md-8 col-lg-8 text-center mt-10">
                <h1>Bonini Nutrition</h1>
            </div>
            <form className="col-md-8 col-lg-6 d-flex flex-column align-items-center my-form" id="myForm">
                <div className="col-md-6 col-lg-5">
                    <label>Login</label>
                    <input name="login" type="text" className="form-control" id="loginInput" aria-describedby="emailHelp" placeholder="Insira seu login"/>
                </div>
                <div className="col-md-6 col-lg-5">
                    <label>Senha</label>
                    <input name="password" type="password" className="form-control" id="passwordInput" placeholder="Insira sua senha"/>
                </div>
                <div className="col-md-6 col-lg-5 mt-2">
                    <button onClick={checkLogin} className="btn btn-primary">Submit</button>
                </div>
            </form>
            {state}
        </div>
    );
};

export default Login;