import mongoose from 'mongoose'
import SaleSchema from './sale.mjs'

const { Schema } = mongoose

const GameSchema = new Schema({
  name: String,
  publisher: String, // Nexon
  thumbUrl: String,
  coverUrl: String,
  sales: [ SaleSchema ],
  platforms: [ String ],
  description: String,
  metacritic: {
    score: Number,
    url: String,
  },
  officialPrice: Number,
  genres: [ String ],
  createDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본값으로 사용
  }
})

export default GameSchema;