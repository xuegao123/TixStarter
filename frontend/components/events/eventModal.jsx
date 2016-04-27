var React = require('react');
var EventStore = require('../../stores/event.js');
var ShowtimesIndex = require('../showtimes/index.jsx');
var ClientActions = require('../../actions/clientActions.js');

module.exports = React.createClass({
  getStateFromStore: function () {
    return { event: EventStore.find(parseInt(this.props.event.id)) };
  },

  // _onChange: function () {
  //   this.setState(this.getStateFromStore());
  // },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ClientActions.fetchSingleEvent(parseInt(newProps.params.eventId));
  },

  // componentDidMount: function () {
  //   // this.eventListener = EventStore.addListener(this._onChange);
  //   ClientActions.fetchSingleEvent(parseInt(this.props.event.id));
  // },
  //
  // componentWillUnmount: function () {
  //   this.eventListener.remove();
  // },

  render: function () {
    if(this.state.event === undefined) { return <div></div>; }

    return(
      <div>

        <div className="event-detail-pane">

          <div className="detail">
            {['title', 'description'].map(function (attr) {
              return <p key={attr}>{attr}: {this.state.event[attr]}</p>;
            }.bind(this))}
          </div>

          <h2 className='detail-header'>Showtimes: </h2>
          <ShowtimesIndex showtimes={this.state.event.showtimes} />

          <button>Learn More</button>
          <button>Get Tickets</button>

        </div>





      </div>
    );
  }
});