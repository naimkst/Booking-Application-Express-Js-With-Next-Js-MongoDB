import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    minlength: 1,
  },
  type:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  distange:{
    type: String,
  },
  images:{
    type: Array,
  },
  description:{
    type: String,
  },
  rating:{
    type: Number,
    min: 0,
    max: 5,
  },
  rooms:{
    type: [String],
  },
  chepestPrice:{
    type: Number,
  },
  featured:{
    type: String,
  }
});

export default mongoose.model('Hotel', HotelSchema);