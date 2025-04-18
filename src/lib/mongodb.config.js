import { MongoClient } from "mongodb"
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const uri = process.env.MONGODB_URI
console.log("MONGODB_URI:", uri);

const options = {}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}
export { clientPromise };

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(uri, { dbName: 'catalogue' });
  } catch (error) {
    console.log(error);
  }
}

export const disconnectMongoDB = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}
