DROP DATABASE IF EXISTS chat;
-- CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  /* Describe your table here.*/
  id INT,
  username TEXT,
  messageText TEXT,
  roomname TEXT,
  PRIMARY KEY(id)
  -- mysql -u root < ./server/schema.sql
  -- sudo service mysql start
);

/* Create other tables and define schemas for them here!
Drop the database????*/
CREATE TABLE room (
  id INT,
  roomname TEXT,
  username TEXT,
  messageText TEXT,
  PRIMARY KEY(id)
)

CREATE TABLE messages/room (
  id INT,
  PRIMARY KEY(id)
)
-- CREATE TABLE user (
--   id INT,
--   roomname TEXT,
--   username TEXT,
--   messageText TEXT,
--   PRIMARY KEY(id)
-- )


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

