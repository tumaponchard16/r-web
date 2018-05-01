import React, { Component } from 'react';
import Carousel from './carousel.js';
import Footer from '../footer/index.js'
import FA from 'react-fontawesome';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return(
      <div>
        <Carousel />
        <div className="container homepage-content">
          <Grid>
            <Row className="show-grid servimg">
              <Col md={4}>
                <div className="img-wrapper">
                  <div className="img-header"><a href="/ikkunaremontti">ikkunaremontti</a></div>
                  <img src="img/etu5.jpg" alt="img1"/>
                </div>
              </Col>
              <Col md={4}>
                <div className="img-wrapper">
                  <div className="img-header"><a href="/asennuspalvelu">asennuspalvelu</a></div>
                  <img src="img/img_2429.jpg" alt="img_2"/>
                </div>
              </Col>
              <Col md={4}>
                <div className="img-wrapper">
                  <div className="img-header"><a href="/oviremontit">oviremontit</a></div>
                  <img src="img/img_2431.jpg" alt="img3"/>
                </div>
              </Col>
            </Row>
          </Grid>

          <Grid>
            <Row>
              <div className="container">
                <Col md={12}>
                  <div className="pargcontent parag-info">
                    <p>Uusien ikkunoiden ja ulko-ovien suunnittelu, tilaaminen ja asennus hoidetaan helposti valtuutetun PiklasKumppani-verkoston avulla. Kotimaiset Piklas-ikkunat ja ulko-ovet saavat avaimet käteen -toimituksena sekä uudisrakentamiseen että korjaustöihin.​​​​​​​

                    <br /> <br />
                    <strong className="pTitle">Valtuutettu PiklasKumppani apunasi​​​​​​​</strong>
                    <br />

                    PiklasKumppani on kokenut ja luotettava ammattilainen, jonka kanssa voit sopia palvelukokonaisuuden tarpeisiin. Kumppaniverkostomme kautta hoituvat mitoitus, oikeanlaisten ikkunoiden ja ulko-ovien suunnittelu ja valinta – ja koko projektit aina asennuksen asti. Paikallinen toimijan avulla säästät aikaa, rahaa ja vaivaa sekä tuet oman alueesi työllisyyttä.

                    <br /><br />

                    Kumppaniverkostomme kautta saat Pyhännän tehtaalla valmistetut Piklas-ikkunat ja ulko-ovet joustavasti sovitussa aikataulussa ja erittäin kilpailukykyiseen hintaan.

                    <br /><br />

                    <a href=""> https://www.piklas.fi/ikkunat-ovet-asennettuna </a>

                    <br /><br />

                    Paikkakunta VALIKKO Uudellamaalla on rajallinen- soita meille me palvelemme tarpeessasi!
                      ​​​​​​​
                    <br /><br />

                    Sinun  paikallinen kumppanisi Uudenmaan ikkunapalvelu 
                    </p>
                  </div>
                </Col>
              </div>
            </Row>
          </Grid>

          <Grid>
            <Row>
              <div className="container">
                <Col md={12}>
                  <div className="wrapper mapwrapper">
                    <img src="img/map.png" alt="map" className="img-responsive center-block" />
                  </div>
                </Col>
              </div>
            </Row>
          </Grid>

          <div className="videos">
            <Grid>
              <Row>
                <div className="container">
                  <div className="pargcontent">
                    <Col md={6}>
                      <iframe width="100%" height="310" src="https://www.youtube.com/embed/iCKl7EJxeHw" frameBorder="0" allow="autoplay; encrypted-media" title="video1" allowFullScreen></iframe>
                    </Col>
                    <Col md={6}>
                      <h3 className="video-description fdescrip">Ikkunaremontti Piklas tyyliin. Katso Yuotube tehtaan video. Simo ja apuri asentavat ikkunoita omakotitaloon</h3>
                    </Col>
                  </div>
                </div>
              </Row>

              <Row>
                <div className="container">
                  <div className="pargcontent">
                    <Col md={6}>
                      <h3 className="video-description sdescrip">Ikkunaremontti Piklas tyyliin. Katso Yuotube tehtaan video. Simo ja apuri asentavat ikkunoita omakotitaloon</h3>
                    </Col>

                    <Col md={6}>
                      <iframe width="100%" height="310" src="https://www.youtube.com/embed/ihcOY_jxy1A" frameBorder="0" allow="autoplay; encrypted-media" title="video" allowFullScreen></iframe>
                    </Col>
                  </div>
                </div>
              </Row>
            </Grid>
          </div>

          <div className="highlights">
            <Grid>
                <Row>
                  <div className="container">
                    <div className="pargcontent">
                        <Col md={4}>
                          <span className="icon-highlights"><FA name="info-circle" size='5x' /></span>
                          <h3>PALVELUT</h3>
                          <p>Uusien ikkunoiden ja ulko-ovien suunnittelu, tilaaminen ja asennus hoidetaan helposti valtuutetun PiklasKumppani-verkoston avulla.</p>
                        </Col>

                        <Col md={4}>
                          <span className="icon-highlights"><FA name="check-circle" size='5x'/></span>
                          <h3>KOHTEET</h3>
                          <p>Kyseisen kohteen myynti, mitoitus (mittavastuu), tilaus käsittely tehtaalle, asennus suunnittelu, asennustyönjohto, asennustyön vastaanottokatselmus​​​​​​​</p>
                        </Col>

                        <Col md={4}>
                          <span className="icon-highlights"><FA name="envelope" size='5x'/></span>
                          <h3>PYYDÄ KÄYMÄÄN</h3>
                          <p>​​​​​​​Pyydä meidät käymään, käyntimme ei maksa sinulle mitään. ​​​​​​​Uskomme, että löydämme Sinulle sopivan ratkaisun!</p>
                        </Col>
                      </div>
                    </div>
                  </Row>
            </Grid>
          </div>

          <div className="bottomContact">
            <Grid>
              <Row>
                <div className="pargcontent">
                  <Col md={12}>
                    <h3 className="text-center">KYSY LISÄTIETOJA MEILTÄ! <Button bsStyle="success" bsSize="large">
                      YHTEYDENOTTO
                    </Button></h3>
                  </Col>
                </div>
              </Row>
            </Grid>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
}

export default Home
