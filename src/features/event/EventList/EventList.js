import React, { Component } from 'react'
import EventListItem from './EventListItem';

class EventList extends Component {
    render() {
        const {events} = this.props;
        return (
            <>
              {events.map(event => (
                  <EventListItem 
                    key={event.id} 
                    event={event}  
                    />
              ))}
            </>
        )
    }
}

export default EventList
