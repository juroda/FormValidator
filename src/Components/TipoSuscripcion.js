import React, { Component } from 'react';
import CreditCardInput from 'react-credit-card-input';

class TipoSuscripcion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tipo: 'premium',
            text: '¡ Optá por Premium !',
            hidden: false,
        }
        this.cambiarCosa = this.cambiarCosa.bind(this);
        this.showInput = this.showInput.bind(this);
    }

    showInput() {
        this.setState({
            hidden: !this.state.hidden,
        })
    }

    cambiarCosa() {
        this.props.cambiemos(this.state.tipo);
    }

    cambiarCosaC() {
        this.props.cambiemos('gratis');
    }

    render() {
        return (
            <div className="containTdeS">
                <div>
                    <button
                        name='tipo'
                        className='buttonSus'
                        value={this.state.tipo}
                        onClick={() => { this.showInput(); this.cambiarCosa(); }}
                    >{this.state.text} </button>
                </div>

                {this.state.hidden ?

                    <div onChange={this.props.onChange}>

                        <CreditCardInput
                            cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
                                <input {...props}
                                    required
                                    name="cardNum"
                                    value={this.props.cardNum}
                                    onChange={handleCardNumberChange(e => (e))} />
                            )}

                            cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
                                <input {...props}
                                    required
                                    name="cardExp"
                                    value={this.props.cardCVCInputRenderer}
                                    onChange={handleCardExpiryChange(e => (e))} />
                            )}
                            cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
                                <input {...props}
                                    required
                                    name="cardCvv"
                                    value={this.props.cardCvv}
                                    onChange={handleCardCVCChange(e => (e))} />
                            )}
                        />

                        <button
                            name='tipo'
                            className='buttonSus'
                            value={this.state.tipo}
                            onClick={() => {
                                (!this.showInput());
                                (this.cambiarCosaC())
                            }}
                        > Cancelar </button>
                    </div>
                    : null}
            </div>
        );
    }
}

export default TipoSuscripcion;