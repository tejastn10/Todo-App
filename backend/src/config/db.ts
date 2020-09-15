import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "src/config/.env" });

const uri: string = process.env.URI!;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

export const connectDb = async () => {
  try {
    await connect(uri, options);
    console.log("====================================");
    console.log("MongoDB Connected...");
    console.log("====================================");
  } catch (error) {
    throw error;
  }
};
