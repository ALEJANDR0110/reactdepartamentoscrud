import React, { Component } from 'react'
import descargar from '../assets/images/descargar.webp'
import ServiceDepartamentos from '../services/ServiceDepartamentos'
import { NavLink } from 'react-router-dom';
import DeleteDepartamento from './DeleteDepartamento';

export default class HomeComponent extends Component {
    service = new ServiceDepartamentos();

    state = {
        deleteDepto: null,
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {
        this.service.getDepartamentos().then((result) => {
            this.setState({
                departamentos: result,
                status: true
            })
        })
    }
    
    deleteDepartamento = (depto) => {
        this.setState({
            deleteDepto: depto
        })
    }

    aceptarDelete = (numero) => {
        this.service.deleteDepartamento(numero).then(result => {
            this.loadDepartamentos()
            this.setState({
                deleteDepto: null
            })
        })
    }

    cancelarDelete = () => {
        this.setState({
            deleteDepto: null
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        if(this.state.status == true){
            return (
                <div style={{margin: "auto", width: "50%"}}>
                    {
                        this.state.deleteDepto &&
                        <DeleteDepartamento departamento={this.state.deleteDepto} aceptarDelete={this.aceptarDelete} cancelarDelete={this.cancelarDelete}/>
                    }
                    <table className='table table-info'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((depto, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{depto.nombre}</td>
                                            <td>{depto.localidad}</td>
                                            <td>
                                                <NavLink className="btn btn-info" to= {"update/" + depto.numero + "/" + depto.nombre + "/" + depto.localidad}>
                                                    Edit
                                                </NavLink>
                                            </td>
                                            <td><button onClick={() => this.deleteDepartamento(depto)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }else {
            return (<img src={descargar} alt='loading...' />)
        }
    }
}
