import React from 'react';
import { Card, Col, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const history = useHistory()
  return (
    <Col xl={3} md={4} sm={6}>
      <Card className="p-3 d-flex flex-column justify-content-between h-100"
        style={{
          boxShadow: "0px 5px 5px 0px rgb(251 251 253);",
          border: "1px #e9ebef solid;"
        }}
      >
        <Image className="mx-auto"
          width={200} height={200} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="mt-1 d-flex align-items-center">
          <p className="text-center text-primary mb-2">{device.name}</p>
        </div>
        {/* <p
          className="text-primary"
          style={{
            'font-size': '20px',
          }} >
          {device.price}₽
        </p> */}
        <p
          className="text-success text-center mb-1"
          style={{
            'font-size': '20px',
          }} >
          {device.price}₽
        </p>
        <Button variant="outline-success" size="sm"
          onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
        >
          КУПИТЬ
        </Button>
      </Card>
    </Col>
  );
};

export default DeviceItem;
