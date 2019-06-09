import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import {createEvent, updateEvent, deleteEvent} from '../eventActions';

const maptState = (state) => ({
  events: state.events
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}


class EventDashboard extends Component {

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }

    handleSelectEvent = event => {
        this.setState({
            selectedEvent: event,
            isOpen: true
        })
    }

    handleDeleteEvent = id => {
      this.props.deleteEvent(id)
    }


    render() {

        const {events} = this.props;
        return (
           <Grid>
               <Grid.Column width={10}>
                   <EventList 
                       deleteEvent={this.handleDeleteEvent} 
                       events={events} 
                    />
               </Grid.Column>

               <Grid.Column width={6}>
                   <h2>Activity Feed</h2>
               </Grid.Column>
           </Grid>
        )
    }
}
export default connect(maptState, actions)(EventDashboard);
