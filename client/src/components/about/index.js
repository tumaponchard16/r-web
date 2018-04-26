import React, { Component } from 'react';
import Footer from '../footer/index.js'
import { Grid, Row, Col } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div>
        <div className="container homepage-content">
        {/*
          <div className="about page-title">
            <Grid>
              <Row>
                <h2>YRITYS</h2>
              </Row>
            </Grid>
          </div>
          */
        }

          <div className="banner banner-img">
            <Grid>
              <Row>
              </Row>
            </Grid>
          </div>

          <div>
            <Grid>
              <Row>
                <Col md={12}>
                  <div className="wrapper yritys-content">
                    <p className="text-left">
                      <strong className="p-header">ETUSIVU-YRITYSESITTELY</strong>

                      <br />

                      Palvelemme sekä yksityis- että yritysasiakkaita tehdessä ikkuna- ja ulko-ovi -korjauksia eri kohteisiin Uudenmaan alueella

                      <br />

                      <b>Palveluihimme kuuluu mm:</b>

                      <br />
                      <br />

                      <ul>
                        <li>ikkunaremontit (ikkunan myynti, asennus ja uusinta)</li>
                        <li>ulko-oviremontit (ovien myynti, asennus ja uusinta)</li>
                        <li>julkisivupanelointi (julkisivupanelointi ja lisälämmöneristys)</li>
                      </ul>

                      <br />

                      <p>Tutustu tarkemmin tarjoamiimme ikkunaremontteihin, ulko-oviremontteihin ja muihin palveluihimme!</p>

                    </p>

                    <p className="text-left">
                      <b className="p-header">Yrityksestämme</b>
                      <br />
                      Annamme kaikista asennetuista kohteista kirjallisesta takuusta. Ikkuna- ja oviremonteissa takuu 2 vuotta. Tämän lisäksi tulee tavarantoimittajan materiaalitakuu itse tuoteelle.

                      <br />
                      <br />

                      Käytämme sopimuskumppaneina vain yrityksiä, jotka ovat luotettavia, jolloin voimme varmistaa, että kaikki lakisääteiset maksut on hoidettu asianmukaisesti. Sanomme harmaalle työlle ehdottomasti ei!

                      <br />
                      <br />

                      Meille on henkilökohtaisesti tärkeää tarjota asiakkaillemme parasta mahdollista palvelua, sekä taata laatu ja luotettavuus tuotteissa ja palvelussa.

                      <br />
                      <br />

                      Olen ollut Piklas partnanina Kumppaniverkoston alusta vuodesta 2014. Katso henkilökohtaiset referenssini REFERENSSIKOHTEET . Esimerkki kohteet vuodelta 2017.

                      <br />
                      <br />
                      Minulla on pitkäkokemus omakotitalojen, paritalojen ja As Oy / Koy kohteiden toteutuksesta kokonaisvaltaisesti. Alkaen suunnittelusta-asennustyön johtoon ja lopulta työn luovutuksesta-vastaanottotarkastukseen asiakkaalle. Katso referenssit siviltamme!

                      <br />
                      <br />

                      Harry Rämö myyntivastaava,
                      <br />Uudenmaan ikkunapalvelu
                    </p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default About;
