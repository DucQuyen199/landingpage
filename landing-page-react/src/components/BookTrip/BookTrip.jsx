import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  OverlayTrigger,
  Popover,
  ProgressBar,
  Row,
} from "react-bootstrap";

import { 
  BuildingIcon, 
  HeartIcon, 
  LeafIcon, 
  MapIcon, 
  SendIcon 
} from "../icons";
import "./BookTrip.css";
import { BOOK_TRIP } from "../../data";

export const BookTrip = () => {
  // Trip to - Popover
  const popover = (
    <Popover id='popover-ongoing' className='rounded-4 border-0 shadow p-2'>
      <Popover.Body className='font-poppins'>
        <div className='d-flex gap-3'>
          <div>
            <Image
              src={`${process.env.PUBLIC_URL}/images/rome.png`}
              roundedCircle
              className='object-fit-cover'
              alt='城市'
              width={45}
              height={45}
            />
          </div>
          <div className='flex-grow-1'>
            <span className='fw-medium'>进行中</span>
            <h5 className='text-black pt-1 pb-2'>罗马之旅</h5>
            <p className='mb-1 fw-medium text-black'>
              <span>40%</span> 已完成
            </p>
            <ProgressBar now={40} />
          </div>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <section id='book-a-trip'>
      <Container>
        <Row className='g-5'>
          {/* Left Column */}
          <Col lg={7} xl={6}>
            <h3 
              className='fw-semibold font-poppins'
              data-aos="fade-right"
              data-aos-delay="100"
            >
              简单快捷
            </h3>
            <h4 
              className='font-volkhov fw-bold text-capitalize'
              data-aos="fade-right"
              data-aos-delay="300"
            >
              三个简单步骤预订您的下一次旅行
            </h4>
            <ListGroup variant='flush' className='mt-4'>
              {/* List Items */}
              {BOOK_TRIP &&
                BOOK_TRIP.map((trip, index) => (
                  <ListGroup.Item
                    key={trip.id}
                    className='d-flex justify-content-start gap-4 border-bottom-0 font-poppins'
                    data-aos="fade-right"
                    data-aos-delay={400 + (index * 150)}
                  >
                    <Row>
                      {/* Icons */}
                      <Col xs={1}>
                        <div
                          className='icon-box rounded-3 d-flex justify-content-center align-items-center'
                          style={{ backgroundColor: trip.color }}
                        >
                          {trip.icon}
                        </div>
                      </Col>
                      {/* Descriptions */}
                      <Col xs={11} className='ps-4'>
                        <h5 className='fw-semibold'>{trip.title}</h5>
                        <p>{trip.description}</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          {/* Right Column */}
          <Col
            lg={5}
            xl={6}
            className='d-flex justify-content-center align-items-center'
          >
            <Card 
              className='rounded-4 font-poppins py-3 px-4 border-0'
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Card.Img
                src={`${process.env.PUBLIC_URL}/images/greece.png`}
                className='w-100 object-fit-cover rounded-4'
                alt='希腊旅行'
                height={180}
              />
              <Card.Body>
                <Card.Title>希腊之旅</Card.Title>
                <Card.Text className='fw-medium'>
                  6月14-29日 | 由 李明 安排
                </Card.Text>
                {/* Icons */}
                <div className='icons d-flex flex-row gap-3'>
                  <div className='d-flex justify-content-center align-items-center rounded-circle'>
                    <LeafIcon />
                  </div>
                  <div className='d-flex justify-content-center align-items-center rounded-circle'>
                    <MapIcon />
                  </div>
                  <div className='d-flex justify-content-center align-items-center rounded-circle'>
                    <SendIcon />
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className='border-0'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-2'>
                    <BuildingIcon />
                    <span className='fw-medium'>24人参与</span>
                  </div>
                  {/* Trip to - Popover */}
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement='top'
                    overlay={popover}
                  >
                    <HeartIcon className='heart-icon' />
                  </OverlayTrigger>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
