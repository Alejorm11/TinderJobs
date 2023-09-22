import React from 'react';
import '../stylesheets/LoginDev.css';
import 'font-awesome/css/font-awesome.min.css';

function LoginDev() {
    return (
        <div className="container mt-5 mb-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-5 mt-3">
                            <i className="fa fa-key"></i>
                            Iniciar Sesión
                            </h3>
                            {/* Formulario de inicio de sesión */}
                            <form>
                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label mb-1">Nombre de Usuario</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label mb-1">Contraseña</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-primary mt-2">Iniciar Sesión</button>
                                    <button type="button" className="btn btn-secondary">Registrarse</button>
                                </div>
                            </form>

                            <div className="mt-4 text-center">
                                <p>O inicia sesión con:</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-dark btn-login">
                                        <i className="fa fa-github"></i> Git
                                    </button>
                                    <button type="button" className="btn btn-outline-dark btn-login">
                                        <i className="fa fa-linkedin"></i> LinkedIn
                                    </button>
                                    <button type="button" className="btn btn-outline-dark btn-login">
                                        <i className="fa fa-windows"></i> Office
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginDev;