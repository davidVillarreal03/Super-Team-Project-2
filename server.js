const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection'); // Ensure this path is correct
const helpers = require('./utils/helpers');
const seed = require('./seeds/seed');
const fs = require('fs');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

async function setupDatabase() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'movies_db',
    password: process.env.DB_PASSWORD,
    port: 5432, // Default PostgreSQL port
  });

  try {
    await client.connect();
    const schemaPath = path.join(__dirname, 'db', 'schema.sql');
    const schema = fs.readFileSync(schemaPath).toString();
    await client.query(schema);
    console.log('Database schema created successfully.');
  } catch (err) {
    console.error('Error creating database schema:', err);
  } finally {
    await client.end();
  }
}

const shouldSeed = process.env.SEED_DB === 'true';

(async () => {
  try {
    // Debug path to ensure connection.js is correctly located
    console.log(
      'Loading sequelize from:',
      path.resolve(__dirname, 'config/connection'),
    );
    await setupDatabase();

    if (shouldSeed) {
      await seed();
      console.log('Database seeded successfully.');
    }

    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  } catch (err) {
    console.error('Error during server startup:', err);
  }
})();
