const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  info: {
    type: String,
    require: true
  },
  website: {
    type: String,
    require: true
  },

  twitter: {
    type: String,
    require: true
  },
  facebook: {
    type: String,
    require: true
  }
});

module.exports = Channel = mongoose.model("Channel", ChannelSchema);
