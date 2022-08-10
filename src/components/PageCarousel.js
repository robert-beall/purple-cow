import Carousel from 'react-bootstrap/Carousel';

function PageCarousel() {
  return (
    <Carousel>
      <Carousel.Item style={{'height':"450px"}}>
        <img
          className="d-block w-100"
          src="/assets/img/carousel.jpeg"
          alt="First slide"
          style={{'height':"450px"}}
        />
        <Carousel.Caption>
          <h3>Social Justice Initiatives</h3>
          <p>Making the world a better place requires courage and mobilization.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"450px"}}>
        <img
          className="d-block w-100"
          src="/assets/img/carousel2.jpeg"
          alt="First slide"
          style={{'height':"450px"}}
        />

        <Carousel.Caption>
          <h3>Green Energy</h3>
          <p>Ensuring a healthy, habitable Earth for future generations.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"450px"}}>
        <img
          className="d-block w-100"
          src="/assets/img/carousel3.jpeg"
          alt="First slide"
          style={{'height':"450px"}}
        />

        <Carousel.Caption>
          <h3>COVID-19 Updates</h3>
          <p>Maintaining and improving public health in difficult times.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"450px"}}>
        <img
          className="d-block w-100"
          src="/assets/img/carousel4.jpeg"
          alt="First slide"
          style={{'height':"450px"}}
        />

        <Carousel.Caption>
          <h3>Purple Cows!</h3>
          <p>Reaching 100,000 Purple Cows!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PageCarousel;
