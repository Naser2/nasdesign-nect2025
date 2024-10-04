import { MongoClient } from 'mongodb';

const clientPromise = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).connect();

export default clientPromise;
