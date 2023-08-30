import mongoose from "mongoose";


const Schema = mongoose.Schema;


const productSchema = new Schema({
    id: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    location: {
      type: 'object',
      properties: {
        address: {
          type: 'string',
          required: true
        },
        city: {
          type: 'string',
          required: true
        },
        state: {
          type: 'string',
          required: true
        }
      }
    },
    images: {
      type: 'array',
      items: {
        type: 'string', // Assuming the images are represented by URLs
      }
    }
});


const Product = mongoose.model("products",productSchema);
// export the model
//module.exports=Signup
export default Product
  