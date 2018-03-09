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
            <form onSubmit={this.props.updateGreeting} className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label">Nombre:</label>
                    <div class="col-sm-10">
                        <input
                            type="text"
                            name="nombre" 
                            value={this.props.data.nombre}
                            onChange={this.props.inputChange}
                            className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Pais:</label>
                    <div className="col-sm-10">
                        <select 
                            name="pais" 
                            size="3" 
                            value={this.props.data.pais} 
                            onChange={this.props.inputChange}>
                            className="form-control"
                                <option>Selecciona Pais</option>
                                {this.state.countries.map(country =>
                                    <option key={country.alpha2Code} value={country.alpha2Code + '|' + country.name}>
                                        {country.name}
                                    </option>
                                )}
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2 control-label">Cumpleaños</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="fecha"
                            value={this.props.data.fecha}
                            onChange={this.props.inputChange} 
                            className="form-control"/>
                        </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <button className="btn btn-primary">Saludar</button>
                    </div>
                </div>
            </form>
        )
    }

}

export default ContactForm;