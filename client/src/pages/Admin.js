import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container>
      <Row>
        <Col md="4" className="mt-3">
          <Form.Label className="d-block mb-3">Категории</Form.Label>
          <Button
            variant={"outline-dark"}
            className="p-2"
            onClick={() => setTypeVisible(true)}
          >
            Добавить
          </Button>
          {/* <Button variant="danger"
            className="ml-2 p-2"
          >
            Удалить
          </Button> */}
        </Col>
        <Col md="4" className="mt-3">
          <Form.Label className="d-block mb-3">Фирмы</Form.Label>
          <Button
            variant={"outline-dark"}
            className="p-2"
            onClick={() => setBrandVisible(true)}
          >
            Добавить
          </Button>
          {/* <Button variant="danger"
            className="ml-2 p-2"
          >
            Удалить</Button> */}
        </Col>
        <Col md="4" className="mt-3">
          <Form.Label className="d-block mb-3">Товары</Form.Label>
          <Button
            variant={"outline-dark"}
            className="p-2"
            onClick={() => setDeviceVisible(true)}
          >
            Добавить
          </Button>
        </Col>
        <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
        {deviceVisible && <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />}
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      </Row>
    </Container>
  );
};

export default Admin;
