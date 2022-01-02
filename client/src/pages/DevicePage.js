import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row, ListGroup } from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container className="mt-3">
      <h1 className="mb-3">{device.name} </h1>
      <Row>
        <Col
          xl={6} md={5}
        >
          <Image
            src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col
          xl={6} md={7}
        >
          <Card
            border="light"
            className="d-flex flex-column h-100"
            style={{
              background: '#f9f9f9',
              padding: '35px 37px',
            }}
          >
            <div
              className="d-flex justify-content-between"
            >
              <h2 className="text-success mb-5"
                style={{ fontSize: '3rem', marginTop: "-10px" }}
              >{device.price} <span className="text-italic">₽</span></h2>
              <span class="is_in_stock">Есть в наличии</span>
            </div>
            {/* <p style={{ fontSize: '16px' }}>Осталось на складе: {device.count} шт.</p> */}
            <Button variant={"success"}
              style={{ maxWidth: '200px' }}
            >В корзину</Button>
          </Card>
        </Col>
      </Row>

      <section className="m-3">
        <Col className="mb-3">
          <h2>Описание </h2>
          <p style={{ fontSize: '16px' }}>{device.description} </p>
        </Col>
        {
          device.info.length > 0 &&
          <Col>
            <h2>Характеристики</h2>
            <ListGroup>
              {device.info.map((info, index) =>
                <ListGroup.Item key={info.id} style={{ background: !(index % 2) && '#f9f9f9', padding: 10 }}>
                  <Row>
                    <Col>
                      {info.title}
                    </Col>
                    <Col>
                      {info.description}
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        }

      </section>
    </Container >
  );
};

export default DevicePage;
