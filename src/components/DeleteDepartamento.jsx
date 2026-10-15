import React, { Component } from 'react'

export default class DeleteDepartamento extends Component {
    
    aceptarDelete = (departamento) => {
        this.props.aceptarDelete(departamento.numero);
    }

    render() {
        return (
            <div>
                <h1 style={{color: "red"}}>Estas seguro de eliminar {this.props.departamento.nombre} {this.props.departamento.localidad}</h1>
                <button onClick={() => this.aceptarDelete(this.props.departamento)}>
                    Aceptar
                </button>
                <button onClick={this.props.cancelarDelete}>
                    Cancelar
                </button>
            </div>
        )
    }
}
