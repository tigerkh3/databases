var models = require('../models');

module.exports = {
  get: function (req, res) {},

  post: function (req, res) {
    // req.body.username
    var username = req.body.username;
    // can't check for data at the moment for some reason
    models.users.create(username, (err, data) => {
      if (err) {
        res.send('unable to add user');
      } else {
        res.send('user added');
      }
    });
  }

};
