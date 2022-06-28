import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    maxPerson: {
      type: Number,
      min: 1,
      required: true,
    },
    beds: {
      type: Number,
    },
    roomNumber: [
      {
        number: Number,
        unabailableDates: { type: [Date] },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
