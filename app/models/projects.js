import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    subTitle: String,
    entreprise: String,
    year: String,
    description: String,
    shortDescription: String,
    technologies: String,
    siteWeb: String,
    image1: String,
    image2: String,
    image3: String,
  },
  {
    timestamps: true,
  }
);

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectSchema);

export default Projects;
