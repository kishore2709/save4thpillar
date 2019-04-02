const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    count: {
      userId: {
        type: Schema.ObjId,
        required: true
      },
      voteCout: {
        type: Number,
        required: true
      }
    }
  }
});
