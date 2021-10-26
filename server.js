const express = require('express');
const sequelize = require('./config/config');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

//const hbs = exphbs.create({ helpers });

//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});