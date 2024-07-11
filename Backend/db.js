const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/allproduct')
  .then(() => {
    console.log('Database Connection successful');
  })
  .catch((err) => {
    console.error('Error in connection:', err);
  });

module.exports = mongoose;
