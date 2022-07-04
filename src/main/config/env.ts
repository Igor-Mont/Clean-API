export default {
  mongoUrl: process.env.MONGO_URL || process.env.MONGODB_URI,
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '<04j2022>'
}
