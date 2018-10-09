const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    //added the profile information
  
    // profile-userpic
    // profile-usertitle
    // Name
    // Contact
    // location
    // experience
    // skills

    picture: {
      type: String
    },
    handle: {
      type: String,
      required: true,
      max: 40
    },
    name: {
      type: String
    },
    contact: {
      type: String
    },
    location: {
      type: String
    },
    experience: [
      {
        title: {
          type: String,
          required: true
        },
        company: {
          type: String,
          required: true
        },
        location: {
          type: String
        },
        from: {
          type: Date,
          required: true
        },
        to: {
          type: Date
        },
        current: {
          type: Boolean,
          default: false
        },
        description: {
          type: String
        }
      }
    ],
    skills: {
      type: [String],
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = Profile = mongoose.model('profile', ProfileSchema);