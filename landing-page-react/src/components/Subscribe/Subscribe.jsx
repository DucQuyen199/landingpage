import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

import { MailIcon, SubmitIcon } from '../icons';
import './Subscribe.css';

export const Subscribe = () => {
  return (
    <section id='subscribe' className='vh-100'>
      <Container className='position-relative'>
        <div 
          className='top-submit-icon position-absolute p-2 start-100 top-0 translate-middle rounded-circle d-flex justify-content-center align-items-center'
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <SubmitIcon />
        </div>
        <Row className='d-flex justify-content-center'>
          <Col md={10} lg={8}>
            <h3 
              className='text-center fw-semibold'
              data-aos="fade-up"
              data-aos-delay="300"
            >
              订阅以获取最新信息、新闻和有关China Travel的其他精彩优惠
            </h3>
            <Form 
              className='mx-auto w-75'
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Row className='g-4'>
                <Col sm={8}>
                  <InputGroup>
                    <InputGroup.Text
                      id='basic-addon1'
                      className='ps-4 pe-1 border-0'
                    >
                      <MailIcon />
                    </InputGroup.Text>
                    <Form.Control
                      type='email'
                      placeholder='您的邮箱'
                      aria-label='YourEmail'
                      aria-describedby='basic-addon1'
                      className='border-start-0 border-0'
                    />
                  </InputGroup>
                </Col>
                <Col sm={4}>
                  <Button type='submit' className='w-100'>订阅</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
