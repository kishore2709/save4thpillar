const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateChannelInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.info = !isEmpty(data.info) ? data.info : "";
  data.website = !isEmpty(data.website) ? data.website : "";
  data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
  data.facebook = !isEmpty(data.facebook) ? data.facebook : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.info)) {
    errors.email = "info field is required";
  }

  if (Validator.isEmpty(data.website)) {
    errors.website = "website field is required";
  }

  if (Validator.isEmpty(data.twitter)) {
    errors.twitter = "twitter field is required";
  }

  if (!Validator.isEmpty(data.facebook)) {
    errors.facebook = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
