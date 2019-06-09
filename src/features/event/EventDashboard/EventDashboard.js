import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
//import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';
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
    // state = {
    //     isOpen: false,
    //     selectedEvent: null
    // }

    // handleChange = () => {
    //     this.setState(({isOpen}) => ({
    //         isOpen: !isOpen
    //     }));
    // }

    handleCreateFormOpen = () => {
        this.setState({
            isOpen: true,
            selectedEvent: null
        })
    }

    // handleFormCancel = () => {
    //     this.setState({
    //         isOpen: false
    //     })
    // }

     handleCreate = (newEvent) => {
       newEvent.id = cuid();
       newEvent.hostPhotoURL = '/assets/user.png';
       this.props.createEvent(newEvent);
    //    this.setState(({events}) => ({
    //        events: [...events, newEvent],
    //        isOpen: false
    //    }))
     }

    handleSelectEvent = event => {
        this.setState({
            selectedEvent: event,
            isOpen: true
        })
    }

    handleUpdateEvent = (updatedEvent) => {
      this.props.updateEvent(updatedEvent)
        this.setState(({events}) => ({
            // events: events.map(event => {
            //     if(event.id === updatedEvent.id){
            //         return {...updatedEvent}
            //     }
            //     else{
            //         return event
            //     }
            // }),
            isOpen: false,
            selectedEvent: null
        }))
    }

    handleDeleteEvent = id => {
      this.props.deleteEvent(id)
        // this.setState(({events}) => ({
        //     events: events.filter(event => event.id !== id)
        // }))
    }


    render() {
        //const {isOpen, selectedEvent} = this.state;
        const {events} = this.props;
        return (
           <Grid>
               <Grid.Column width={10}>
                   <EventList 
                       //selectEvent={this.handleSelectEvent} 
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
