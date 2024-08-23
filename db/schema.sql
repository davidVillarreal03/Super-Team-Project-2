-- Drop existing tables to ensure a clean slate
DROP TABLE IF EXISTS favorites CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS genre CASCADE;
DROP TABLE IF EXISTS user CASCADE;

-- Recreate the tables with the correct schema

-- Users Table
CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Genres Table
CREATE TABLE genre (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR(255) NOT NULL
);

-- Movies Table
CREATE TABLE movie (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30),
  year INTEGER CHECK (year >= 1900 AND year <= 2100),
  length VARCHAR(30),
  mpaa_rating VARCHAR(10),
  genre_id INTEGER REFERENCES genre(id),
  plot TEXT,
  filename VARCHAR(255)
);


-- Favorites Table
CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES user(id) ON DELETE CASCADE,
  movie_id INTEGER REFERENCES movie(id) ON DELETE CASCADE,
  UNIQUE (user_id, movie_id)
);

