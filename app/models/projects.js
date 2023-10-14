import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    subTitle: String,
    entreprise: String,
    year: Number,
    description: String,
    shortDescription: String,
    technologies: String,
    images: String,
  },
  {
    timestamps: true,
  }
);

const Projects =
  mongoose.models.Projects || mongoose.models("Projects", projectSchema);

export default Projects;
