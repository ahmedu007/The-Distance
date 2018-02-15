import React, { Component } from "react";
import { Container, Menu, Button, Icon } from "semantic-ui-react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { fixed } = this.props;
    return (
      <Container>
        <Menu.Item as="a" active href="/">
          Home
        </Menu.Item>
        <Menu.Item position="right">
          <Button
            as="a"
            inverted={!fixed}
            primary={fixed}
            style={{ marginLeft: "0.5em" }}
          >
            <Icon name="signup" />
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    );
  }
}

export default Navbar;
