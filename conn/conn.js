const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect('mongodb+srv://gofood:gofood@cluster0.oyfhtua.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Call the connection function
conn();
