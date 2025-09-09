import { Card, Col, Container, Row, Button, Image } from "react-bootstrap";
import { useState } from "react";

import "./Services.css";
import { SERVICES } from "../../data";

export const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section
      id='services'
      className='d-flex justify-content-center flex-column position-relative py-5'
    >
      {/* Decorative elements */}
      <div className="position-absolute top-0 start-0 d-none d-md-block">
        <div className="decoration-circle bg-primary opacity-10" style={{width: '120px', height: '120px', borderRadius: '50%'}}></div>
      </div>
      <div className="position-absolute bottom-0 end-0 d-none d-md-block">
        <div className="decoration-square bg-warning opacity-10" style={{width: '80px', height: '80px', transform: 'rotate(45deg)'}}></div>
      </div>
      
      <Container className="position-relative">
        <div className='header w-100 text-center mb-5'>
          <h3 
            className='text-uppercase fw-semibold font-poppins mb-3'
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="position-relative">
              服务类别
              <div className="position-absolute start-50 translate-middle-x" style={{bottom: '-5px'}}>
                <Image 
                  src={`${process.env.PUBLIC_URL}/images/underline.svg`} 
                  alt="Underline" 
                  style={{width: '70px'}}
                />
              </div>
            </span>
          </h3>
          <h4 
            className='font-volkhov fw-bold mb-4'
            data-aos="fade-up"
            data-aos-delay="300"
          >
            我们提供最优质的服务
          </h4>
          <p 
            className="text-secondary w-75 mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            探索我们为您精心设计的各种优质服务，让您的旅行体验更加舒适和难忘。
          </p>
        </div>

        <Row xs={1} md={2} lg={4} className='gx-4 gy-5 justify-content-center'>
          {SERVICES &&
            SERVICES.map((service, index) => (
              <Col key={service.id}>
                <Card 
                  className={`service-card rounded-5 border-0 h-100 py-4 px-3 shadow-sm transition-all ${activeService === service.id ? 'active-card' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={300 + (index * 150)}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                  style={{
                    transform: activeService === service.id ? 'translateY(-15px)' : 'translateY(0)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div 
                    className='services-icon-wrapper d-flex justify-content-center align-items-center mx-auto mb-3'
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: activeService === service.id ? 
                        `linear-gradient(45deg, rgba(255,165,0,0.1), rgba(255,140,0,0.2))` : 
                        'rgba(240, 240, 240, 0.5)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div className='services-icon' style={{transform: 'scale(1.2)'}}>
                      {service.icon}
                    </div>
                  </div>
                  <Card.Body className='text-center d-flex flex-column'>
                    <Card.Title className='font-open-sans fw-bold mb-3'>
                      {service.title}
                    </Card.Title>
                    <Card.Text className='font-poppins text-secondary flex-grow-1'>
                      {service.description}
                    </Card.Text>
                    <div className={`mt-3 service-btn-container ${activeService === service.id ? 'd-block' : 'd-none'}`}>
                      <Button 
                        variant="outline-primary" 
                        size="sm" 
                        className="rounded-pill px-4"
                      >
                        了解更多
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}
