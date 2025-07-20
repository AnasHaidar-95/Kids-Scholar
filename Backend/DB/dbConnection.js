import mongo from'mongoose';

// Connect to MongoDB
mongo.connect('mongodb://localhost:27017/kids_scholar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
