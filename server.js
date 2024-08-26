const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Configure session middleware
const sess = {
  secret: 'Super secret secret', //eventuall should be process.env so people don't know our secret but wait on this so we can talk as a group...
  cookie: {
    maxAge: 300000, // Session will expire after 5 minutes (300000 milliseconds)
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: 'strict', // Helps prevent CSRF attacks
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Apply session middleware
app.use(session(sess));

// Set up Handlebars.js as the template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes
app.use(routes);

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
