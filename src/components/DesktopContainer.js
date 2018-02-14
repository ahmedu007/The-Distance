import React, { Component } from "react";
import { Menu, Responsive, Segment, Visibility } from "semantic-ui-react";
import HomepageHeading from "./HomepageHeading";
import Navbar from "./Navbar";

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props.text;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 300, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Navbar fixed={fixed} />
            </Menu>
            <HomepageHeading name={this.props.text.text.text} />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
