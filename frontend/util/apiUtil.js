var ServerActions = require('../actions/serverActions.js');
var hashHistory = require("react-router").hashHistory;
// var app = require('../components/app');

var ApiUtil = {

  // User Functions

  createUser: function (data) {
   $.ajax({
     url: "api/users",
     type: "POST",
     data: { user: data },
     success: function (user) {
       ServerActions.receiveUser(user);
     }
   });
 },

  // Event Functions

  fetchAllEvents: function () {
    $.ajax({
      url: "api/events",
      success: function (events) {
        ServerActions.receiveAllEvents(events);
      }
    });
  },

  fetchSingleEvent: function (id) {
    $.ajax({
      url: "api/events/" + id,
      success: function (event) {
        ServerActions.receiveSingleEvent(event);
      }
    });
  },

  createEvent: function (data) {
    $.ajax({
      url: "api/events",
      // Changed "event" to "events"
      method: "POST",
      data: {event: data},
      success: function (event) {
        // debugger;
        hashHistory.push("/wizard-showtime");
        // hashHistory.push('/event/' + event.id);
        ServerActions.receiveSingleEvent(event);
        // app.closeCreateEventModal();
        // callback && callback(event.id);
      }
    });
  },


  editEvent: function(data) {
    $.ajax({
       url: "api/events/" + data.id,
       type: "PATCH",
       data: { event: { title: data.title,
                        catchphrase: data.catchphrase,
                        description: data.description,
                        image_url: data.image_url,
                        video_url: data.video_url,
                        user_id: data.user_id,
                        revenue_goal: data.revenue_goal,
                        revenue_status: data.revenue_status
                      }
              },
       success: function (event) {
         ServerActions.receiveSingleEvent(event);
         hashHistory.push("/");
       }
    });
  },

  deleteEvent: function(id){
    // console.log("Api Util delete event");
    $.ajax({
     url: "api/events/" + id,
     type: "DELETE",
     success: function (event) {
      //  debugger;
       // console.log("success function for Api Util!");
       ServerActions.removeEvent(event);
     }
   });
  },

  // // Showtime Functions
  //
  fetchAllShowtimes: function () {
    // debugger;
    $.ajax({
      url: "api/showtimes",
      success: function (showtimes) {
        // debugger;
        ServerActions.receiveAllShowtimes(showtimes);
      },
      error: function(error){
        // debugger;
      }
    });
  },

  fetchSingleShowtime: function (id) {
    // console.log("api util fetch single showtime");
    // console.log("id is " + id);
    $.ajax({
      url: "api/showtimes/" + id,
      success: function (showtime) {
        // console.log("success function!");
        ServerActions.receiveSingleShowtime(showtime);
      }
    });
  },

  createShowtime: function (showtime) {
    $.ajax({
      url: "api/showtimes",
      method: "POST",
      data: {showtime: showtime},
      success: function (showtime) {
        // console.log("sucess function of APiUtil Create Showtime");
        // debugger;
        // hashHistory.push('/event/' + showtime.event_id);

        ServerActions.receiveSingleShowtime(showtime);
        hashHistory.push("/wizard-ticket");
      }
    });
  },

  // Ticket Functions

  fetchAllTickets: function () {
    $.ajax({
      url: "api/tickets",
      success: function (tickets) {
        ServerActions.receiveAllTickets(tickets);
      }
    });
  },

  fetchSingleTicket: function (id) {
    $.ajax({
      url: "api/tickets/" + id,
      success: function (ticket) {
        ServerActions.receiveSingleTicket(ticket);
      }
    });
  },

  createTicket: function (data) {
    $.ajax({
      url: "api/tickets",
      method: "POST",
      data: {ticket: data},
      success: function (ticket) {
        // debugger;
        hashHistory.push('/event/' + ticket.event.id);
        ServerActions.receiveSingleTicket(ticket);
        // callback && callback(ticket.id);
      }
    });
  },

  // TicketPurchase Functions

  fetchAllTicketPurchases: function () {
    $.ajax({
      url: "api/ticket_purchases",
      success: function (ticketPurchases) {
        ServerActions.receiveAllTicketPurchases(ticketPurchases);
      }
    });
  },

  fetchSingleTicketPurchase: function (id) {
    $.ajax({
      url: "api/ticket_purchases/" + id,
      success: function (ticketPurchase) {
        hashHistory.push('/success');
        ServerActions.receiveSingleTicketPurchase(ticketPurchase);
      }
    });
  },

  createTicketPurchase: function (data) {
    // console.log("create ticket purchase");
    $.ajax({
      url: "api/ticket_purchases",
      // Changed "event" to "events"
      method: "POST",
      data: {ticket_purchase: data},
      success: function (ticketPurchase) {
        // console.log('create ticket purchase success');
        // hashHistory.push('/success');
        ServerActions.receiveSingleTicketPurchase(ticketPurchase);
        // callback && callback(event.id);
      }
    });
  },


};

//TODO: remove when done
window.ApiUtil = ApiUtil; //Just for testing


module.exports = ApiUtil;
