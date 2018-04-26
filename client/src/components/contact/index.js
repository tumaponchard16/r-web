import React, { Component } from 'react';
import Footer from '../footer/index.js'
import {Button, Grid, Row, Col, Form, FormGroup, FormControl,ControlLabel } from 'react-bootstrap';
import axios from 'axios';
import LoadingSpinner from '../loadingSpinner';
import Map from '../MapContainer'

// FormGroup instance
function FieldGroup({...props }) {
  return (
    <FormGroup>
      <FormControl {...props} />
    </FormGroup>
  );
}

// validate all input fields
function validate(name, email, message, phone, zipCode, streetAddress, service){
  // store all errors in a single array
  const errors = [];

  if(name.length === 0) {
    errors.push("Name can't be empty!");
  }

  if(email.split('').filter(x => x === '@').length !== 1 || email.indexOf('.') === -1 || email.length < 5 ){
    errors.push("Invalid Email");
  }

  if(message.length === 0) {
    errors.push("Message can't be empty!");
  }

  if(phone.length === 0) {
    errors.push("Phone can't be empty!");
  }

  if(zipCode.length === 0) {
    errors.push("Zipcode can't be empty!");
  }

  if(service.length === 0) {
    errors.push("Service can't be empty!");
  }

  if(streetAddress.length === 0) {
    errors.push("Address can't be empty!");
  }

  return errors;

}

class OTTAA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      phone: '',
      zipCode: '',
      streetAddress: '',
      service: '',
      errors: [],
      status: '',
      loading: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { name, email, message, phone, zipCode, streetAddress, service } = this.state;

    // check errors
    const errors = validate(name, email, message, phone, zipCode, streetAddress, service);
    if(errors.length > 0 ) {
      this.setState({ errors });
      return;
    }

    // Show loading text to the button on submit
    await this.setState({ loading: true }, () => {
      // send data to the server or backend
      axios.post('api/form', {
        name,
        email,
        message,
        phone,
        zipCode,
        streetAddress,
        service
      })
      .then((response) => {
        // If message successfully sent
        if (response.data.msg === 'success'){
          this.setState({
            status: 'Message sent successfully!',
            loading: false,
            errors: []
          })
          this.resetForm()
        }
        // Message failed
        else if(response.data.msg === 'fail'){
          this.setState({
            status: 'Message not sent! Please try again later!',
            loading: false
          })
        }
      })
    })
}

  render() {
    const { errors } = this.state;
    return(
      <div>
        <div className="container homepage-content">

            <div className="contact-details-map">
              <Grid>
                <div className="contact-wrapper">
                  <Row>
                    <Col md={4}>
                      <h2>Yhteystiedot</h2>
                      <div>
                        <b>Soita meille milloin tahansa</b>
                        <br />
                        Osoite:
                        <br />
                        Uudenmaan ikkunapalvelu / Harry Rämö p. 044 293 63 52 02970 Espoo 
                      </div>
                      <br />
                      <div>
                        <b>Puhelin: </b>
                        0442936352
                      </div>
                      <br />
                      <div>
                        <b>Faksi: </b>
                        mailbox@elisanet.fi
                      </div>
                    </Col>

                    <Col md={8}>
                      <h2>Info kartalla</h2>
                      <Map />
                    </Col>
                  </Row>
                </div>
              </Grid>
            </div>

            <div className="contact-desc">
              <h1>OTA MEIHIN YHTEYTTÄ</h1>
              <p>​​​​​​​Pyydä meidät käymään, käyntimme ei maksa sinulle mitään.<br />
              ​​​​​​​Uskomme, että löydämme Sinulle sopivan ratkaisun!
              </p>
            </div>

            <div className="form-contact">

                <Row>
                    <Form onSubmit={this.handleSubmit} id="contact-form">
                      {/* Error message*/}
                      <div className="errors">
                        {errors.map(error => (
                          <p key={error}><li>{error}</li></p>
                        ))}
                      </div>

                      <div className="status">
                        <p>{this.state.status}</p>
                      </div>

                      <Row>
                        <Col md={6}>
                          <FieldGroup
                            name="name"
                            type="text"
                            placeholder="Koko nimi"
                            onChange={this.handleChange}
                            />

                          <FieldGroup
                            type="email"
                            name="email"
                            placeholder="Sähköposti"
                            onChange={this.handleChange}
                            />

                          <FormGroup controlId="formControlsTextarea">
                            <FormControl componentClass="textarea" id="message" name="message" placeholder="Viesti täällä" rows="6" onChange={this.handleChange}/>
                          </FormGroup>
                        </Col>

                        <Col md={6}>
                          <FieldGroup
                            name="phone"
                            type="text"
                            placeholder="Puhelin"
                            onChange={this.handleChange}
                            />

                          <FieldGroup
                            type="text"
                            name="streetAddress"
                            placeholder="Katuosoite"
                            onChange={this.handleChange}
                            />

                          <FieldGroup
                            type="text"
                            name="zipCode"
                            placeholder="Postinumero"
                            onChange={this.handleChange}
                            />

                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel className="selectLabel">Lisätietoja (alasveto valikko- valitse mikä remontti on kyseessä):</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" name="service" onChange={this.handleChange}>
                              <option value="">select</option>
                              <option value="ikkunaremontti">Ikkunaremontti</option>
                              <option value="ulko-oviremontti">Ulko-oviremontti</option>
                            </FormControl>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Button type="submit" id="btnsubmit">{this.state.loading ? <LoadingSpinner /> : 'Submit'}</Button>
                    </Form>

                </Row>
                <p className="add-info">HUOM. Jos sinulla on valokuva, voit lähettää valokuvan osoitteeseen <a href="mailto:uudenmaanikkunapalvelu@elisanet.fi​​​​​​​">uudenmaanikkunapalvelu@elisanet.net</a></p>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default OTTAA;
