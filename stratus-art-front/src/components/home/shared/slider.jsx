import Carousel from 'react-bootstrap/Carousel';
import dammy1 from "../../../assests/dammy/dammy1.jpg";
import dammy2 from "../../../assests/dammy/dammy8.jpg";
import dammy3 from "../../../assests/dammy/dammy11.jpg";


function ProductAdverts() {
  return (
    <Carousel>
      <Carousel.Item style={{height:'445px'}}>
        <img
          className="d-block w-100"
          src={dammy1}
          alt="First slide"
        />
        <Carousel.Caption style={{backgroundColor:'white',color:'black',opacity:'80%'}}>
          <h3>Great Discounts</h3>
          <p>We offer great discounts on our products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'445px'}}>
        <img
          className="d-block w-100"
          src={dammy2}
          alt="Second slide"
        />

        <Carousel.Caption style={{backgroundColor:'white',color:'black',opacity:'80%'}}>
          <h3>Biggest Art Gallery on the internet</h3>
          <p>Over 3000 millon artists all over the world.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'445px'}}>
        <img
          className="d-block w-100"
          src={dammy3}
          alt="Third slide"
        />

        <Carousel.Caption style={{backgroundColor:'white',color:'black',opacity:'80%'}}>
          <h3>Amazing Art Work</h3>
          <p>
            Made with love by the top artists.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductAdverts;