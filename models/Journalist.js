const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JournalistSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  info: {
    type: String,
    require: true,
    workingIn: {
      type: String,
      require: true
    }
  },
  roleType: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true,
    count: {
      userId: {
        type: Schema.Types.ObjectId,
        require: true
      },
      voteCout: {
        type: Number,
        require: true
      }
    }
  },
  review: {
    userId: {
      id: Schema.Types.ObjectId,
      require: true
    },
    text: {
      type: String,
      require: true
    }
  },
  social: {
    twitter: {
      type: String,
      require: true
    },
    facebook: {
      type: String,
      require: true
    }
  }
});

module.exports = Journalist = mongoose.model("Journalist", JournalistSchema);
