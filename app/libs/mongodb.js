import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to Mongodb database");
  } catch (err) {
    console.log("error connecting to Mongodb database", err);
  }
};

export default connectToMongoDB;
