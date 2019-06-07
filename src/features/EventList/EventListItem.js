import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
    render() {
        const {hostPhotoURL, date, venue, description, attendees, hostedBy} = this.props.event;
        return (
            <Segment.Group>
            <Segment>
                <Item.Group>
                <Item>
                    <Item.Image size="tiny" circular src={hostPhotoURL} />
                    <Item.Content>
                    <Item.Header as="a">Event Title</Item.Header>
                    <Item.Description>
                        Hosted by {hostedBy}
                    </Item.Description>
                    </Item.Content>
                </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                <Icon name="clock" /> {date} |
                <Icon name="marker" /> {venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                  {attendees.map(person => (
                      <EventListAttendee key={person.id} person={person} />
                  ))}
                </List>
            </Segment>
            <Segment clearing>
                <span>{description}</span>
                <Button as="a" color="teal" floated="right" content="View" />
            </Segment>
            </Segment.Group>
        )
    }
}

export default EventListItem
