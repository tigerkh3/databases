var db = require('../db');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (messageObj, callback) {
    // create variables for incoming data
    var user = messageObj.body.username;
    var message = messageObj.body.message;
    var roomname = messageObj.body.roomname;
    message = message.replace("\'", "\\'");

    db.connection.query(`INSERT INTO messages (username, messageText, roomname) VALUES ('${user}', '${message}', '${roomname}')`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, data);
      }
    });


  } // a function which can be used to insert a message into the database
};
