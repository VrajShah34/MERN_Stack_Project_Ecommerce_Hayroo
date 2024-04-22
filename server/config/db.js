const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://vrajshah34:1111password@cluster0.oh66gbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
