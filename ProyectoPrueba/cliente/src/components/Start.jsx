import React from 'react';
import '../stylesheets/Start.css';
import 'font-awesome/css/font-awesome.min.css';

function Start() {
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Logo */}
                <div className="col-12 text-center mb-4">
                <img
                    src={require("../img/Logo.png")}
                    alt="Logo"
                    style={{ maxWidth: '150px' }}
                />
                </div>
            </div>
            <div className="row">
                {/* Título */}
                <div className="col-12 text-center">
                <h1>Ingresa como</h1>
                </div>
            </div>
            <div className="row mt-4">
                {/* Opciones (Desarrolladores y Empresas) */}
                <div className="col-md-6 mb-3">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Desarrollador</h5>
                    <p className="card-text">Regístrate como desarrollador.</p>
                    <button className="btn btn-primary">Registrarse</button>
                    </div>
                </div>
                </div>
                <div className="col-md-6 mb-3">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Empresas</h5>
                    <p className="card-text">Regístrate como empresa.</p>
                    <button className="btn btn-primary">Registrarse</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Start;