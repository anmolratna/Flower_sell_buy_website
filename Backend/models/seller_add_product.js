const mongoose = require('mongoose');

const seller_added_product_Schema=new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      image : {
        type : String,
        default:"https://tse4.mm.bing.net/th?id=OIP.pG50gW_AoQoMJw1Rta5T2QHaEH&pid=Api&P=0&h=180",
        set: function(v) {
            // Check if the value is an object
            if (typeof v === 'object' && v !== null) {
              // Convert the object to a JSON string
              return JSON.stringify(v);
            }
            // Return the original value if not an object
            return v;
          }
        
      },
      price: {
        type: Number
      },
      category:{
        type : String
    },
    location:{
      type:String
    },
    description:{
      type:String
    },
    availability:{
      type : String
    },
      review: {
        type: String
    },
});

const seller_added_product=mongoose.model('SellerAddedProduct' ,  seller_added_product_Schema );

module.exports=seller_added_product;