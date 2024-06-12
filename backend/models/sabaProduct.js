import mongoose from "mongoose";

const {Schema} = mongoose;

const sabaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  image:{
      type: String, 
    
  },
  price:{
    type: Number,
    required: true
  },
  effects: [
    {
      Relaxtion:{
        type: Number,
      },
      energizing: {
        type: Number,
      },
      creative:{
        type: Number,
      },
      euphoric: {
        type: Number,
      },
      stress:{
        type: Number,
      },
      pain: {
        type: Number,
      }
    }
  ]
})

export default mongoose.models.sabaProduct || mongoose.model("sabaProduct",sabaSchema);