import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  status: {
    type: String,
    
  },
  address: {
    type: String,
   
  },
  phone_number: {
    type: String,
    
  },
  userid: {
    type: String,
    
  },
  productid: {
        type: String,
        
      },
  producttitle: {
        type: String,
        
      },
  productprice: {
        type: Number,
        
      },
 
});

const Order = mongoose.model('order', orderSchema);

export default Order;
