const mongoose = require('mongoose');
const { success, error } = require('consola');
const db = `mongodb://localhost:27017/dooggle-care`

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    success({
      message: 'MongoDB Connected...',
      badge: true,
    })
  } catch (err) {
    error({
      message: err.message,
      badge: false,
    })
    process.exit(1);
  }
};

module.exports = connectDB;
