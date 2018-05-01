import React, { Component } from 'react';
import FA from 'react-fontawesome';
import { Grid, Row, Col } from 'react-bootstrap';
import FacebookProvider, { Page } from 'react-facebook';

class Footer extends Component {
  render() {
    return(
      <div>
        <div className="footer">
          <Grid>
              <Row>
                <div className="footer-wrapper">
                  <Col md={7}>
                    <img className="footer-logo" src="img/white-logo.png" alt="white-logo" />
                    <p>Uusien ikkunoiden ja ulko-ovien suunnittelu, tilaaminen ja asennus hoidetaan helposti valtuutetun PiklasKumppani-verkoston avulla. Kotimaiset Piklas-ikkunat ja ulko-ovet saavat avaimet käteen -toimituksena sekä uudisrakentamiseen että korjaustöihin. <br /> <a href="/">Lue lisää</a>​​​​​​​</p>

                    <div className="wrapper">
                      <p>
                        <span><FA name="map-marker" /> Uudenmaan ikkunapalvelu/ Harry Rämö  p. 044 293 63 52  |  02970 Espoo</span>
                      </p>

                      <p>
                        <span><FA name="envelope" /> uudenmaanikkunapalvelu@elisanet.fi​​​​​​​</span>
                      </p>

                      <p><strong>Ovet myös  linkin kautta:</strong><br />
                      <a href="/"> http://oviremontithelsinki.fi​​​​​​​</a> </p>
                    </div>

                    <p className="impo-details">Teemme myyntiedustusta Piklas Oylle eteläisessä Suomessa Piklas y- tunnus 1999174-</p>
                    <p className="impo-details">Uudenmaan ikkunapalvelu   y- tunnus 2902057-4</p>
                  </Col>

                  <Col md={5}>
                    <h3 className="fbpage-header">Kuten Facebook-sivullamme</h3>
                    <FacebookProvider appId="1966924530292215">
                      <Page href="https://www.facebook.com/uudenmaanikkunapalvelu/" tabs="timeline, events, messages" height="340px"/>
                    </FacebookProvider>
                  </Col>

                  {/*
                  <Row>
                    <Col md={12}>
                      <ul className="footer-menu">
                        <li><a href="/">KOTI</a></li>
                        <li><a href="/">YRITYS</a></li>
                        <li><a href="/">ASENNUSPALVELU</a></li>
                        <li><a href="/">IKKUNAREMONTTI</a></li>
                        <li><a href="/">OVIREMONTIT</a></li>
                        <li><a href="/">REFERENSSIKOHTEET</a></li>
                        <li><a href="/">OTTAA YHTEYTTÄ</a></li>
                      </ul>
                    </Col>
                  </Row>
                  */}
                </div>

              </Row>
          </Grid>
        </div>

        <div className="bottomost-footer">
          <Grid>
            <Row>
              <Col md={6}>
                <p className="copyright-footer">Copyright 2017. Uudenmaanikkunapalvelu | Kaikki oikeudet pidätetään
</p>
              </Col>

              <Col md={6}>
                <span className="footer-social-icons">
                  <a href="https://www.facebook.com/uudenmaanikkunapalvelu/" target="_blank"><FA name="facebook" /></a>
                  <a href="/"><FA name="twitter" /></a>
                  <a href="/"><FA name="instagram" /></a>
                  <a href="/"><FA name="youtube" /></a>
                  <a href="/"><FA name="linkedin" /></a>
                </span>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Footer;
