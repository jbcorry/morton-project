var Message = require('../schemas/messageSchema');
var Group = require('../schemas/groupSchema');


module.exports = {


addMessage: function(req, res) {
  console.log(req.body);

  var msg = {
    message: req.body.message.message,
    date: new Date(),
    user: req.body.message.user._id.user,
    location: req.body.message.Location,
    group: req.body.groupId
  };
  console.log(msg);
  new Message(msg).save(function(err, data){
    // console.log(data);
    if (err){
      console.log(err);

      res.status(500).send(err);
    }else{

      // Group.findByIdAndUpdate({_id: data.group}, { $push: {messages: data}}, function(err, result){
        // if(err){
        //   return err;
        // }

      // });
      res.send(data);
    }
  });
},

getMessages: function(req, res) {
  Message.find().populate('user').exec().then(function(response){
    res.send(response);
  });
},
deleteMessage: function(req, res) {
  var id = req.params.id;
  Message.findByIdAndRemove(id, function (err, resp) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(resp);
    }
  });
},
deleteAll: function(req, res) {
  Message.remove(function (err, resp) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(resp);
    }
  });
},

};
