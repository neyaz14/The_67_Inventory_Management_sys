const mongoose = require('mongoose');

const connectDB = async () => {
    const uri =`mongodb+srv://${process.env.DBUser}:${process.env.DBPassw}@cluster0.epj76.mongodb.net/mongooseUser?retryWrites=true&w=majority&appName=Cluster0`
  try {
    const conn = await mongoose.connect(uri, {
    //   useNewUrlParser: true,
    });
    console.log('MongoDB course hive Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
