import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI ||  'mongodb://root:example@localhost:27018/GlassesTrybe?authSource=admin',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;