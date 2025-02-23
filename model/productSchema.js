const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  universityId: { type: String, required: true, trim: true },
  universityName: { type: String, required: true, trim: true },
  location: { type: String, required: true },
  numberOfStudents : {type: Number, required: true},
  numberOfCourses : {type: Number, required: true},
  isPublic : {type: String, required: true},
  establishedYear : {type: Number, required: true},
  contactEmail : {type: String, required: true, trim: true},
});

module.exports = mongoose.model("Product", universitySchema);
