var ServerActions = require('../actions/serverActions.js');

var ApiUtil = {

  // Event Functions

  fetchAllEvents: function () {
    console.log('called fetchAllEvents');
    $.ajax({
      url: "api/events",
      success: function (events) {
        console.log('called success function for fetchAllEvents');
        ServerActions.receiveAllEvents(events);
      }
    });
  },

  fetchSingleEvent: function (id) {
    console.log("fetchSingleEvent called");
    $.ajax({
      url: "api/events/" + id,
      success: function (event) {
        console.log("fetchSingleEvent AJAX success function called");
        ServerActions.receiveSingleEvent(event);
      }
    });
    console.log('past ajax');
  },

  createEvent: function (event, callback) {
    $.ajax({
      url: "api/event",
      method: "POST",
      data: {event: event},
      success: function (event) {
        ServerActions.receiveSingleEvent(event);
        callback && callback(event.id);
      }
    });
  }

  // // Showtime Functions
  //
  // fetchAllShowtimes: function () {
  //   $.ajax({
  //     url: "api/showtime",
  //     success: function (showtimes) {
  //       ServerActions.receiveAllShowtimes(showtimes);
  //     }
  //   });
  // },
  //
  // fetchSingleShowtime: function (id) {
  //   $.ajax({
  //     url: "api/showtime/" + id,
  //     success: function (showtime) {
  //       ServerActions.receiveSingleShowtime(showtime);
  //     }
  //   });
  // },
  //
  // createShowtime: function (showtime, callback) {
  //   $.ajax({
  //     url: "api/showtime",
  //     method: "POST",
  //     data: {showtime: showtime},
  //     success: function (showtime) {
  //       ServerActions.receiveSingleShowtime(showtime);
  //       callback && callback(showtime.id);
  //     }
  //   });
  // }
  //
  // // Ticket Functions
  //
  // fetchAllTickets: function () {
  //   $.ajax({
  //     url: "api/ticket",
  //     success: function (tickets) {
  //       ServerActions.receiveAllTickets(tickets);
  //     }
  //   });
  // },
  //
  // fetchSingleTicket: function (id) {
  //   $.ajax({
  //     url: "api/ticket/" + id,
  //     success: function (ticket) {
  //       ServerActions.receiveSingleTicket(ticket);
  //     }
  //   });
  // },
  //
  // createTicket: function (ticket, callback) {
  //   $.ajax({
  //     url: "api/ticket",
  //     method: "POST",
  //     data: {ticket: ticket},
  //     success: function (ticket) {
  //       ServerActions.receiveSingleTicket(ticket);
  //       callback && callback(ticket.id);
  //     }
  //   });
  // }

};


window.ApiUtil = ApiUtil; //Just for testing


module.exports = ApiUtil;