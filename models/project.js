const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  index: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  tech: { type: String, required: true },
  deployLink: { type: String, required: true },
  gitHubLink: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
