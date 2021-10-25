const express = require('express');
const sequelize = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});