import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Image,
  Modal,
  Ratio,
  Row,
  Stack,
} from 'react-bootstrap';

import { PlayIcon } from '../icons';
import './Hero.css';

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id='hero'>
        <Container>
          <Row>
            {/* Left Column */}
            <Col
              lg={5} md={6}
              className='d-flex justify-content-start align-items-center'
            >
              <div>
                <h1 
                  className='text-uppercase font-poppins fw-semibold'
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  世界各地的最佳目的地
                </h1>
                <h2 
                  className='font-volkhov fw-bold'
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  旅行，<ins className='text-decoration-none'>享受</ins> 并
                  开启全新丰富的生活
                </h2>
                <p 
                  className='font-poppins'
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  我们提供最佳的旅行体验，让您在探索世界的同时，收获珍贵的记忆和美好的回忆。
                  无论您想去哪里，我们都能为您提供专业的旅行建议和服务。
                </p>
                <Stack 
                  direction='horizontal' 
                  gap={5}
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  {/* Find out more - Button */}
                  <Button
                    variant='warning'
                    className='border-0 text-white font-open-sans shadow-sm px-3 py-2'
                  >
                    了解更多
                  </Button>
                  {/* Play Demo */}
                  <div
                    onClick={() => setShowModal(true)}
                    className='play-btn d-flex justify-content-start align-items-center gap-3'
                  >
                    <div className='rounded-circle d-flex justify-content-center align-items-center cursor-pointer'>
                      <PlayIcon width={12} height={12} />
                    </div>
                    观看视频
                  </div>
                </Stack>
              </div>
            </Col>
            {/* Right Column */}
            <Col 
              lg={7} 
              md={6} 
              className='d-flex justify-content-center justify-content-md-end align-items-center p-4 p-md-0'
            >
              <Image
                src={`${process.env.PUBLIC_URL}/images/hero.png`}
                fluid
                alt='英雄图片'
                width={580}
                data-aos="zoom-in"
                data-aos-delay="300"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Play Demo - Modal */}
      <Modal
        size='lg'
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Body>
          <Ratio aspectRatio='16x9'>
            <video controls='controls' autoPlay>
              <source
                src={`${process.env.PUBLIC_URL}/images/video.mp4`}
                type='video/mp4'
              />
            </video>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  );
}
