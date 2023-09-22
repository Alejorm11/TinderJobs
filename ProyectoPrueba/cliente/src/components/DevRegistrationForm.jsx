import React from 'react';
import '../stylesheets/DevRegistrationForm.css';
import 'font-awesome/css/font-awesome.min.css';

function DevRegistrationForm() {
    return (
        <div className="container mt-4 mb-4">
        <div className="row justify-content-center">
            <div className="col-md-7">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center mt-3 mb-4">
                        <i className="fa fa-pencil"></i>
                        Regístrate
                        </h3>
                    <form>
                        <h5>Información personal</h5>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="lastname" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="lastname" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="text" className="form-control" id="phone" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="country" className="form-label">País</label>
                                <input type="text" className="form-control" id="country" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-1">
                                <label htmlFor="city" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="city" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <h5>Habilidades Técnicas</h5>
                        <div className="row mb-2">
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">Rol</label>
                                <select className="form-select" id="role">
                                    <option value="front">Front-end</option>
                                    <option value="back">Back-end</option>
                                    <option value="fullstack">Fullstack</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="experience" className="form-label">Experiencia</label>
                                <select className="form-select" id="experience">
                                    <option value="sinexperiencia">Sin Experiencia</option>
                                    <option value="practicas">Prácticas</option>
                                    <option value="1anio">1 año</option>
                                    <option value="2anios">2 años</option>
                                    <option value="3anios">3 años</option>
                                    <option value="masde4">Más de 4 años</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <label className="form-label">Stack tecnológico</label>
                        <div className="row mb-3">
                            <div className='col-md-4'>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="html" />
                                <label className="form-check-label" htmlFor="html">HTML</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="css" />
                                <label className="form-check-label" htmlFor="css">CSS</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="javascript" />
                                <label className="form-check-label" htmlFor="javascript">JavaScript</label>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="nodejs" />
                                <label className="form-check-label" htmlFor="nodejs">Node.js</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="react" />
                                <label className="form-check-label" htmlFor="react">React</label>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="sql" />
                                <label className="form-check-label" htmlFor="sql">SQL</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="nosql" />
                                <label className="form-check-label" htmlFor="nosql">NoSQL</label>
                            </div>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                        </div>
                        <div className="mb-3 mt-4">
                            <label className="form-label mb-3">Otras opciones de registro:</label>
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
                    </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default DevRegistrationForm;
