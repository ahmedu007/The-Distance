import React, { Component } from "react";
import {
  Icon,
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";
import * as moment from "moment";
import locationImg from "./images/google-location-icon-location.png";

const ResponsiveContainer = props => (
  <div>
    <DesktopContainer text={props} />
    <MobileContainer text={props} />
  </div>
);

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        name: "",
        description: {
          text: ""
        },
        url: "",
        logo: {
          original: {
            url: ""
          }
        },
        start: {
          timezone: ""
        }
      }
    };
  }

  getEventDetails() {
    fetch(
      `https://www.eventbriteapi.com/v3${
        this.props.match.url
      }/?token=VBUSKKCQ2VTXKPOP34PX`
    )
      .then(res => res.json())
      .then(res => this.setState({ event: res }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    if (this.props.event) {
      return this.props.event.map(event => {
        if (event.id === this.props.match.params.id)
          this.setState({
            event
          });
      });
    }
    this.getEventDetails();
  }

  render() {
    const location = this.state.event.start.timezone.split("/");
    return (
      <ResponsiveContainer
        text={this.state.event.name}
        signUp={this.state.event.url}
      >
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column floated="left" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src={
                    this.state.event.logo !== null
                      ? this.state.event.logo.original.url
                      : `https://www.seeklogo.net/wp-content/themes/seeklogo-2017/images/not-available.jpg`
                  }
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Event Description:
                </Header>
                <p style={{ fontSize: "1.2em" }}>
                  {this.state.event.description.text}
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge" href={this.state.event.url}>
                  Register Now!
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Date & Time:
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  {moment(this.state.event.start.local).format(
                    "dddd, Do MMMM YYYY"
                  )}
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  {moment(this.state.event.start.local).format("HH:mm:ss ")}
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Tickets Range:
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  <Icon name="ticket" />
                  {this.state.event.is_free ? "Free" : "$ N/A"}
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Location Details:
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  <Image avatar src={locationImg} />
                  <em>{location[1]}</em>, <b>{location[0]}</b>
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Online Event:
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  <Icon name="world" />
                  {this.state.event.online_event ? "Yes" : "No"}
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical />
      </ResponsiveContainer>
    );
  }
}

export default EventDetails;
