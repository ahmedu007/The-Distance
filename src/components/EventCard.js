import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import * as moment from "moment";
import { NavLink } from "react-router-dom";

const EventCard = props => {
  const location = props.event.start.timezone.split("/");
  return (
    <Card
      raised
      centered
      style={{ textAlign: "left", minHeight: "350px" }}
      id="img-zoom-in"
    >
      <NavLink to={`/events/${props.event.id}`}>
        <Image
          src={
            props.event.logo !== null
              ? props.event.logo.url
              : `http://renovatelocal.com.au/wp-content/themes/renovate-child/images/soon.jpg`
          }
          style={{ minHeight: "145px" }}
          alt="thumbnail"
        />
        <Card.Content
          style={{
            alignItems: "justify",
            overflow: "hidden",
            textOverflow: "ellipsis"
            // whiteSpace: "nowrap"
          }}
        >
          <Card.Header>{props.event.name.text}</Card.Header>
          <br />
          <Card.Meta>
            <span className="date" style={{ fontSize: "14px" }}>
              <Icon name="calendar" />
              {moment(props.event.start.local).format("DD/MM/YYYY")}
            </span>
          </Card.Meta>
          <Card.Description style={{ verticalAlign: "bottom" }}>
            <Icon name="location arrow" />
            {location[1]}
          </Card.Description>
        </Card.Content>
      </NavLink>
    </Card>
  );
};

export default EventCard;
