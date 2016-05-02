var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/client_actions.js');
var UserStore = require('../../stores/user');
// var SelectEventDropdown = require('./SelectEventDropdown');
var Select = require('react-select');

var ReactDropdown = require('react-dropdown');

module.exports = React.createClass({

  getInitialState: function(){
    return({
      event_id: "",
      date: "",
      time: "",
      location: ""
    });
  },

  eventIdChange: function(keyboardEvent){
    var newEventId = keyboardEvent.target.value;
    this.setState({ event_id: newEventId });
    console.log("EventId: " + this.state.event_id);
  },

  dateChange: function(keyboardEvent){
    var newDate = keyboardEvent.target.value;
    this.setState({ date: newDate });
    console.log("Date: " + this.state.date);
  },

  timeChange: function(keyboardEvent){
    var newTime = keyboardEvent.target.value;
    this.setState({ time: newTime });
    console.log("Time: " + this.state.time);
  },

  locationChange: function(keyboardEvent){
    var newLocation = keyboardEvent.target.value;
    this.setState({ location: newLocation });
    console.log("Location: " + this.state.location);
  },

  handleSubmit: function(keyboardEvent){
    debugger;
    
    keyboardEvent.preventDefault();
    var showtimeData = {
      event_id: this.state.event_id,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
    };

    ClientActions.createShowtime(showtimeData);
  },

  // eventOptions: function(){
  //   UserStore.user.events.map(function(event){
  //     <div>
  //       <option value=event.title>event.title}</option>
  //     </div>
  //   });
  // },

  render: function(){

    // <input type="text"
    //         value={this.state.event_id}
    //         onChange={this.eventIdChange}
    //   />
    // var eventOptions =
    //   UserStore.user().events.map(function(event){
    //     <option value={event.name}>{event.name}</option>
    //   });

    return(
      <div>


        <h3>Create New Showtime</h3>
        <form onSubmit={this.handleSubmit}>

          <br></br>

            <label> Event:
              <select value={this.state.eventId}
              onChange={this.eventIdChange}>
                {UserStore.user().events.map(function (event) {
                  return <option key={event.id} value={event.id}>{event.title}</option>;
                  // return <EventIndexItem key={event.id} event={event} />;
                })}
              </select>
            </label>

          <br></br>

            <label> Date:
              <input type="date"
                      value={this.state.date}
                      onChange={this.dateChange}
                />
            </label>

          <br></br>

            <label> Time:
              <input type="time"
                      value={this.state.time}
                      onChange={this.timeChange}
                />
            </label>

          <br></br>

            <label> Location:
              <input type="text"
                      value={this.state.location}
                      onChange={this.locationChange}
                />
            </label>

          <br></br>

        <input type="submit" value="Create Showtime" />

        <br></br>

        </form>
        <br></br>
        <p>To Do: <b>Change Date/Time, Add Dropdown for MyShows</b></p>
      </div>
    );
  }


});
