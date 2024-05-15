module.exports = {
  development: {
    username: root,
    password: password,
    database: "techblog_db",
    host: 5432,
    dialect: "postgres"
  },
  test: {
    username: root,
    password: null,
    database: "techblog_db",
    host:5432,
    dialect: "postgres"
  },
  production: {
    url: process.env.DB_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require:true,
        rejectUnauthorized:false
      }
    }
  }
}
