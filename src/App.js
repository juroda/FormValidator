import './App.css';
import React, { Component } from 'react';
import Cnames from './Components/Cnames';
import DatosPersonales from './Components/DatosPersonales';
import TipoSuscripcion from './Components/TipoSuscripcion';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tipo: 'Gratis',
      nombre: '',
      apellido: '',
      email: '',
      pais: '',
      cardNum: '',
      cardExp: '',
      cardCvv: '',
      oculto: false,

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cambiarNombre = this.cambiarNombre.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit(event) {
    this.setState({
      [alert('A name was submitted: ' + this.state.nombre)]: event
    });
  }

  cambiarNombre(tipo) {
    this.setState({ tipo: tipo })
  }

  componentDidMount() {
    const url = 'https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones/';
    fetch(url)
      .then((res) => res.json())
      .then((json) => this.setState({ id: json.length }));
    console.log(this);

  }

  postData = () => {
    fetch('https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(this.objectToPost)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Objeto posteado:', data.html_url);
      })
      .catch((error) => {
        console.log(error, 'catch the hoop');
      });
  };

  render() {
    const { tipo, nombre, apellido, email, pais, cardNum, cardExp, cardCvv } = this.state;

    let isEnabled;

    if (tipo === 'premium') {
      isEnabled =
        email.length > 0 &&
        tipo.length > 0 &&
        nombre.length > 0 &&
        pais.length > 0 &&
        cardNum.length > 0 &&
        cardExp.length > 0 &&
        cardCvv.length > 0;
      this.objectToPost = {
        tipo: this.state.tipo.toLowerCase(),
        nombre: this.state.nombre.toLowerCase(),
        apellido: this.state.apellido.toLowerCase(),
        email: this.state.email.toLowerCase(),
        pais: this.state.pais.toLowerCase(),
        cardNum: this.state.cardNum,
        cardExp: this.state.cardExp,
        cardCvv: this.state.cardCvv
      };

    } else {
      isEnabled =
        email.length > 0 &&
        tipo.length > 0 &&
        nombre.length > 0 &&
        apellido.length > 0 &&
        pais.length > 0;
      this.objectToPost = {
        tipo: this.state.tipo.toLowerCase(),
        nombre: this.state.nombre.toLowerCase(),
        apellido: this.state.apellido.toLowerCase(),
        email: this.state.email.toLowerCase(),
        pais: this.state.pais.toLowerCase()
      };
    }

    return (

      <div id="mainForm">

        <div className="containForm">

          <div className="body-text">

            <h1>Suscribite</h1>
            <small>Se parte de nuestra comunidad</small>

          </div>

          <form
            autoComplete="off"
            name="formValidator"
            onSubmit={this.handleSubmit}
            onError={(errors) => console.log(errors)}
          >

            <DatosPersonales onChange={this.handleChange} />

            <Cnames onChange={this.handleChange} />

            <TipoSuscripcion onChange={this.handleChange} tipo={this.state.tipo} cambiemos={this.cambiarNombre} />


            <input type="submit" disabled={!isEnabled} onClick={this.postData} />

          </form>

          <div className="firma">
            <a href="www.linkedin.com/in/judith-rocio-davalos-214a54150" >by: Rocio Dávalos</a>
          </div>

        </div>
        
        <div>
          {JSON.stringify(this.objectToPost)}
        </div>

      </div>


    );
  }
}

export default App;
