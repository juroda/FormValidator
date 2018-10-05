import React, { Component } from 'react';
import '../App.css'

class DatosPersonales extends Component {


        render() {

                return (
                        <div className="form">

                                <input required
                                        type="text"
                                        name="nombre"
                                        id="column-left"
                                        placeholder="Nombre"
                                        value={this.props.nombre}
                                        onChange={this.props.onChange} />

                                <input required
                                        type="text"
                                        name="apellido"
                                        id="colum-right"
                                        placeholder="Apellido"
                                        value={this.props.apellido}
                                        onChange={this.props.onChange} />

                                <input required
                                        name="email"
                                        type="email"
                                        value={this.props.email}
                                        onChange={this.props.onChange}
                                        placeholder="example@hotmail.com" />
                        </div>
                )
        }

}

export default DatosPersonales;