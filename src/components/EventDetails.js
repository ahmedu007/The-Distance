import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";

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
    this.getEventDetails();
  }

  render() {
    const location = this.state.event.start.timezone.split("/");
    return (
      <ResponsiveContainer text={this.state.event.name}>
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
                  Location Details:
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  <Image
                    avatar
                    src="http://www.ocsa.co.za/wp-content/uploads/2017/08/google-location-icon-location.png"
                  />
                  <em>{location[1]}</em>, <b>{location[0]}</b>
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Tickets Range:
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  {this.state.event.is_free ? "Free" : "$ N/A"}
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              <a href="/">Case Studies</a>
            </Divider>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Did We Tell You About Our Bananas?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but it's really true. It took years
              of gene splicing and combinatory DNA research, but our bananas can
              really dance.
            </p>
            <Button as="a" size="large">
              I'm Still Quite Interested
            </Button>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    );
  }
}

export default EventDetails;
