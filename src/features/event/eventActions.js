import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventTypes";

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        payload: {event}
    }
}

export const updateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        payload: {event}
    }
}

export const deleteEvent = (id) => {
    return {
        type: DELETE_EVENT,
        payload: {id}
    }
}