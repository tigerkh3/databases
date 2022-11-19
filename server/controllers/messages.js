var models = require('../models');

module.exports = {
  get: function (req, res) {

  }, // a function which handles a get request for all messages
  // this gets run on a router.post
  post: function (req, res) {
   // call on model creation function
   models.messages.create(req, (err, data) => {
    if (err) {
      console.log(data.toString());
      console.log('unable to add message');
      res.end();
    } else {
      console.log('message added');
      res.end();
    }
  });
  } // a function which handles posting a message to the database
};
