import { Col, Container, Image, ListGroup, Row, Stack } from "react-bootstrap";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";
import "./Footer.css";
import { FOOTER } from "../../data";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='py-3 g-3' lg={5} md={4} sm={3} xs={2}>
          <Col data-aos="fade-up" data-aos-delay="100">
            <h2>China Travel.</h2>
            <small className='fw-medium'>
              在几分钟内预订您的旅行，获得更长时间的完全控制。
            </small>
          </Col>

          {FOOTER &&
            FOOTER.map((item, index) => (
              <Col 
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                {/* Footer List Titles */}
                <strong className='footer-title text-dark mb-0 mb-sm-3'>
                  {item.name}
                </strong>
                <ListGroup variant='flush'>
                  {/* Footer List Items */}
                  {item.children.map((child) => (
                    <ListGroup.Item
                      key={child.id}
                      action
                      href={child.link}
                      className='border-bottom-0 p-0 my-1 fw-medium'
                    >
                      {child.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            ))}

          <Col data-aos="fade-up" data-aos-delay="500">
            {/* Social Icons */}
            <div className='social-icon d-flex flex-row gap-4'>
              <div className='rounded-circle border-0 d-flex justify-content-center align-items-center'>
                <FacebookIcon />
              </div>
              <div className='rounded-circle border-0 d-flex justify-content-center align-items-center'>
                <InstagramIcon />
              </div>
              <div className='rounded-circle border-0 d-flex justify-content-center align-items-center'>
                <TwitterIcon />
              </div>
            </div>
            {/* Apps */}
            <p className='my-3'>发现我们的应用</p>
            <Stack direction='horizontal' gap={2}>
              <Image
                src={`${process.env.PUBLIC_URL}/images/google-play.svg`}
                className='object-fit-cover'
                alt='谷歌应用商店'
              />
              <Image
                src={`${process.env.PUBLIC_URL}/images/play-store.svg`}
                className='object-fit-cover'
                alt='应用商店'
              />
            </Stack>
          </Col>
        </Row>

        <Row className='text-center py-5' data-aos="fade" data-aos-delay="600">
          <small className='fw-medium'>版权所有 © China Travel</small>
        </Row>
      </Container>
    </footer>
  );
};
