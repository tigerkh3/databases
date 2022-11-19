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
    db.connection.query(`INSERT INTO users (user) VALUES ('${username}')`, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, data);
      }
    });
  }
};
