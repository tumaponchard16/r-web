import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Carousely extends Component {
  render() {
    return(
      <div className="container car-cont">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={400} alt="900x500" src="img/piklas_kumppani_kuva.jpg" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={400} alt="900x500" src="img/s-img.png" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Carousely
