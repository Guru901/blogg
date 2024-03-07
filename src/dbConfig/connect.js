import mongoose from "mongoose";

export const conn = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);

  if (!connection) {
    console.log("error connecting DB");
    return;
  } else {
    console.log("Connect to DB");
  }
};
