import React from 'react';
import { Text, Card, Titulo, CardHeader, CardBody } from './styles';

const ReminderCard = props => {
  return (
    <Card>
      <CardHeader>
        <Titulo>{props.item.titulo}</Titulo>
      </CardHeader>
      <CardBody>
        <Text>{props.item.corpo}</Text>
      </CardBody>
    </Card>
  );
};

export default ReminderCard;
