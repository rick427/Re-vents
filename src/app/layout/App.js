import React, {Component, Fragment} from 'react';
import { Container } from 'semantic-ui-react';
import {Route, Switch, withRouter} from 'react-router-dom';
import NavBar from '../../features/nav/Navbar/NavBar';
import Homepage from '../../features/home/HomePage';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import TestComponent from '../../features/Testarea/TestComponent';


class App extends Component {
  render(){
    return (
      <Fragment>
          <Route exact path="/" component={Homepage}/>
          <Route path='/(.+)' render={() => (
            <>
              <NavBar/>
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard}/>
                  <Route path="/events/:id" component={EventDetailedPage}/>
                  <Route path="/people" component={PeopleDashboard}/>
                  <Route path="/profile/:id" component={EventDashboard}/>
                  <Route path="/settings" component={SettingsDashboard}/>
                  <Route path={["/createEvent", "/manage/:id"]} component={EventForm}/>
                  <Route path="/test" component={TestComponent}/>
                </Switch>
              </Container>
            </>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
