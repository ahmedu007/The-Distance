import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import "./HomepageHeading.css";

const HomepageHeading = props => (
  <Container text>
    <Header
      as="h1"
      content={props.name}
      inverted
      style={{
        fontSize: props.mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: "0.5em",
        marginTop: props.mobile ? "1.5em" : "2em"
      }}
    />

    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

export default HomepageHeading;
