import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Col, Accordion } from "react-bootstrap/";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Категории игрушек</Accordion.Header>
      <Accordion.Body className="p-0">
        <ListGroup className="my-2">
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            active={Object.entries(device.selectedType).length === 0}
            onClick={() => device.setSelectedType({})}
            key={'unic'}
          >
            Все игрушки
          </ListGroup.Item>
          {device.types.map(type =>
            <ListGroup.Item
              style={{ cursor: 'pointer' }}
              active={type.id === device.selectedType.id}
              onClick={() => device.setSelectedType(type)}
              key={type.id}
            >
              {type.name}
            </ListGroup.Item>
          )}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
});

export default TypeBar;
