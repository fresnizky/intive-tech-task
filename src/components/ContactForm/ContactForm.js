import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code')
          .then(res => {
              this.setState({ countries: res.data });
          });
      }

    render() {
        return (
            <form onSubmit={this.props.updateGreeting}>
                <div className="form-group">
                    <label>Nombre:
                        <input
                            type="text"
                            name="nombre" 
                            value={this.props.data.nombre}
                            onChange={this.props.inputChange} />
                    </label>
                </div>

                <div className="form-group">
                    <label>Pais:
                        <select name="pais" size="3" value={this.props.data.pais} onChange={this.props.inputChange}>
                            <option>Selecciona Pais</option>
                            {this.state.countries.map(country =>
                                <option key={country.alpha2Code} value={country.alpha2Code + '|' + country.name}>
                                    {country.name}
                                </option>
                            )}
                        </select>
                    </label>
                </div>

                <div className="form-group">
                    <label>Cumpleaños
                        <input
                            type="text"
                            name="fecha"
                            value={this.props.data.fecha}
                            onChange={this.props.inputChange} />
                    </label>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Saludar</button>
                </div>
            </form>
        )
    }

}

export default ContactForm;