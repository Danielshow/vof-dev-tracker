const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: 5432,
    dialect: process.env.DIALECT
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: 5432,
    dialect: process.env.DIALECT
  },
  production: {
    use_env_variable: process.env.DATABASE_URL  
  }
}
