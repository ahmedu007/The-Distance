import React, { Component } from "react";
import { Container, Menu, Button, Icon, Input } from "semantic-ui-react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const pageNum = this.state.value.match(/^\d+$/);
    if (pageNum !== null && pageNum <= this.props.totalPages) {
      this.props.getEvents(+pageNum[0]);
      this.setState({
        value: ""
      });
    }
  }

  render() {
    const { fixed, inverted } = this.props;
    return (
      <Menu
        fixed={fixed ? "top" : null}
        inverted={!inverted}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
      >
        <Container>
          <Menu.Item as="a" active href="/">
            Home
          </Menu.Item>
          {this.props.button ? (
            <Menu.Item position="right">
              <Button
                as="a"
                inverted={!inverted}
                primary={fixed}
                style={{ marginLeft: "0.5em" }}
                href={this.props.signUp}
              >
                <Icon name="signup" />
                Sign Up
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item position="right">
              <form onSubmit={this.handleSubmit}>
                <Input
                  icon="copy"
                  iconPosition="left"
                  placeholder="Go to page..."
                  onChange={this.handleChange}
                  value={this.state.value}
                />
              </form>
            </Menu.Item>
          )}
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
