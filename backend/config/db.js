import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connection successfull");
  } catch (error) {
    console.log("MongoDB database connection failed");
    process.exit(1);
  }
};

export default connectDB;
