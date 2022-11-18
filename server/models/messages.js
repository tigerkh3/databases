var db = require('../db');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (callback, infoWeNeedToPassIn) {
    // we start here somehow get a call to our database
    // take in the passed in information from controllers.messages
    // and apply it to our database

    // db.query(`INSERT into users (user) VALUES ('${username}')`, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     callback(null, data);
    //   }
    // });


  } // a function which can be used to insert a message into the database
};
