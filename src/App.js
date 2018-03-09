import React, { Component } from 'react';
import './App.scss';
import ContactForm from './components/ContactForm/ContactForm';
import Greeting from './container/Greeting/Greeting'
import VisitorList from './container/VisitorList/VisitorList'

class App extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getGreeting = this.getGreeting.bind(this);
  }

  state = {
    visitors: [
      {
        name: 'Federico',
        countryName: 'Argentina',
        countryCode: 'AR',
        birthDate: '11/10/1979'
      },
      {
        name: 'Alberto',
        countryName: 'Italia',
        countryCode: 'IT',
        birthDate: '18/11/1962'                
      },
      {
        name: 'Laura',
        countryName: 'Mexico',
        countryCode: 'MX',
        birthDate: '28/02/1976'
      }
    ],
    formData: {
      nombre: '',
      pais: '',
      fecha: '',
    },
    greeting: ''
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  handleSubmit(event) {
    const formData = {...this.state.formData};
    let visitor = {};

    visitor.name = (formData.nombre) ? formData.nombre : 'desconocido';

    if (formData.pais) {
      let country = formData.pais.split('|');
      visitor.countryCode = country[0];
      visitor.countryName = country[1];
    }

    if (formData.fecha) {
      visitor.birthDate = formData.fecha;
    }
    
    this.getGreeting(visitor);
    this.addVisitor(visitor);

    event.preventDefault();
  }

  addVisitor(visitor) {
    this.setState({
      visitors: [
        ...this.state.visitors,
        visitor
      ]
    });
  }

  getGreeting(visitor) {
    let greeting = 'Hola '

    greeting += (visitor.name) ? visitor.name : 'Desconocido';

    if (visitor.countryName) {
      greeting += ' de ' + visitor.countryName;
    } else {
      greeting += ' de algun lugar';
    }

    if (visitor.birthDate) {
      const currentYear = new Date().getFullYear();
      let fecha = visitor.birthDate.split('/');
      greeting += ', el dia ' + 
        fecha[0] + ' del mes ' + 
        fecha[1] + ' tendras ' + (currentYear - fecha[2]) + ' años'
    } else {
      greeting += ', algun dia seras mas viejo.';
    }
    
    this.setState({
      greeting: greeting
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">Ejercicio Intive</h1>
          <h2 className="text-center">Federico Martin Resnizky</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div class="panel panel-default">
              <div class="panel-body">
                <ContactForm data={this.state.formData} inputChange={this.handleInputChange} updateGreeting={this.handleSubmit} />
              </div>
              <div class="panel-footer">
                <Greeting greeting={this.state.greeting} />              
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <VisitorList visitors={this.state.visitors} getGreeting={this.getGreeting} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
