import React from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import "./HomepageHeading.css";

const HomepageHeading = props => (
  <Container text>
    <Header
      as="h1"
      content={props.name}
      inverted
      style={{
        fontSize: props.mobile ? "2em" : "3em",
        fontWeight: "normal",
        marginBottom: "0.5em",
        marginTop: props.mobile ? "1.5em" : "2em"
      }}
    />
  </Container>
);

export default HomepageHeading;
