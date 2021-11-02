const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require("./controllers");

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    httpOnly: true,
    secure: false,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.get('', (req, res) => {
 //   res.render('login');
//});

app.use(routes);
//app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});