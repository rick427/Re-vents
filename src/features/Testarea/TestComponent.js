import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testAction';
import { Button } from 'semantic-ui-react';

const mapState = (state) => ({
    data: state.test.data
});

const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {incrementCounter, decrementCounter, data} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data} </h3>
                <Button onClick={incrementCounter} positive content="increment"/>
                <Button onClick={decrementCounter} negative content="decrement"/>
            </div>
        )
    }
}

export default connect(mapState, actions)(TestComponent);
