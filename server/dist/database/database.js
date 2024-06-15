import { connect } from "mongoose";
export const connectDatabase = async (DATABASE_URL) => {
    await connect(DATABASE_URL);
    console.log("database connected");
};
