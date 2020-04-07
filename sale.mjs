import mongoose from 'mongoose'

const { Schema } = mongoose

export const SaleSchema = new Schema({
  platform: String,
  game: {
    type: mongoose.Types.ObjectId, // Steam
    ref: 'Game'
  },
  gameUuid: String,
  price: Number,
  createDate: {
    type: Date,
    default: Date.now,
  }
})

export default SaleSchema