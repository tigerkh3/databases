var db = require('../db');

module.exports = {
  getAll: function () {
    /*
    db.query(
  'SELECT * FROM users',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
    */
  },
  create: function (username, callback) {
    // sometype of database input stuff
    console.log(username);
    db.connection.query(`INSERT into users (user) VALUES ('${username}')`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
};
