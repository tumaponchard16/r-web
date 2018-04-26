import React, { Component } from 'react';
import Footer from '../../footer/index.js'
import { Grid, Row, Col } from 'react-bootstrap';

class Asennuspalvelu extends Component {
  render() {
    return(
      <div>
        <div className="container homepage-content">
          <div className="banner-img-serv1 banner">
          </div>

        <div>
          <Grid>
            <Row>
              <Col md={12}>
                <div className="wrapper assenuspalvelu-content">
                  <p className="text-left">
                    <b className="p-header">Yhdellä sopimuksella koko paketti</b>
                    <br />
                    <br />
                    Avaimet käteen –toimituksissa asiakas tekee sopimuksen suoraan PiklasKumppani-yrityksen kanssa, joka laskuttaa niin työn kuin tuotteiden osuuden. Osa yrityksistä tarjoaa myös muita remontti- tai rakennuspalveluita.
                    <br />
                    <br />
                    <b>PiklasKumppanilta saat yhdellä sopimuksella kaiken tarvitsemasi:</b>
                  </p>

                  <Row>
                  <br />
                    <Col md={6}>
                        <p className="text-left">
                          <ul>
                            <li>Ilmainen tarvekartoitus kohteessa.</li>
                            <li>Ikkunoiden ja ovien esittely demotuotteiden avulla.</li>
                            <li>Neuvonta tuotteiden ja ominaisuuksien valinnassa.</li>
                            <li>Mittauspalvelu ja vastuu tuotteiden mitoituksesta.</li>
                            <li>Tuotteiden tilaus- ja toimitusvaiheista huolehtiminen.</li>
                            <li>Remontti-/asennussuunnitelma ja vaiheiden aikataulutus.</li>
                          </ul>
                        </p>
                    </Col>

                    <Col md={6}>
                        <p className="text-left">
                          <ul>
                            <li>Ilmainen tarvekartoitus kohteessa.</li>
                            <li>Ikkunoiden ja ovien esittely demotuotteiden avulla.</li>
                            <li>Neuvonta tuotteiden ja ominaisuuksien valinnassa.</li>
                            <li>Mittauspalvelu ja vastuu tuotteiden mitoituksesta.</li>
                            <li>Tuotteiden tilaus- ja toimitusvaiheista huolehtiminen.</li>
                            <li>Remontti-/asennussuunnitelma ja vaiheiden aikataulutus.</li>
                          </ul>
                        </p>
                    </Col>
                  </Row>

                  <p className="text-left">
                    <br />
                    Meille on henkilökohtaisesti tärkeää tarjota asiakkaillemme parasta mahdollista palvelua, sekä taata laatu ja luotettavuus tuotteissa ja palvelussa.
                    <br />
                    <br />
                    Asennuksessa mittavastuu MEILLÄ (edustajamme mitoittanut paikanpäällä)
                    <br />
                    <br />
                    Asennustyölle annamme 2 vuoden takuun ja teemme asennuksen sisällön ikkuna/ovitilauksen yhteyteen. Suoritamme aina työn hyväksynnän asiakkaalla kirjallisesti asennuskohteissamme. Tämän lisäksi tulee tavarantoimittajan materiaalitakuu itse tuotteelle.
                    <br />
                    <br />
                    Toimitusajat noin 4-5 vkoa tilauksesta ikkunat (+ asennusmarginaali 1-2 vkoa), tuotteiden toimituksen jälkeen (aika tarkennetaan yhdessä asiakkaan kanssa). Sesonkiaikana on hyvä olla liikkeellä ajoissa, toimitusajat ovat silloin pitemmät.​​​​​​​
                    <br />
                    <br />
                    Yrityksellämme on myös voimassaolevat vastuu- ja tapaturmavakuutukset. Käytämme sopimuskumppaneina vain yrityksiä, jotka ovat luotettavia, tällöin voimme varmistua, että kaikki lakisääteiset maksut on hoidettu asianmukaisesti. Sanomme harmaalle työlle ehdottomasti ei!

                    <br />
                    <br />
                    <b>KYSY LISÄTIETOJA MEILTÄ!  <a href="/">YHTEYDENOTTO</a> </b>
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

export default Asennuspalvelu;
