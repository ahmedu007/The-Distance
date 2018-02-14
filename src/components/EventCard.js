import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import * as moment from "moment";

const EventCard = props => (
  <Card raised centered>
    <Image src={props.event.logo.url} />
    <Card.Content>
      <Card.Header>{props.event.name.text}</Card.Header>
      <br />
      <Card.Meta style={{ textAlign: "left" }}>
        <span className="date">
          <Icon name="calendar" />
          {moment(props.event.start.local).format("DD/MM/YYYY")}
        </span>
      </Card.Meta>
      <Card.Description>{}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default EventCard;
