-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT,
  roomname TEXT,
  username TEXT,
  messageText TEXT,
  PRIMARY KEY(id)
  -- mysql -u root < ./server/schema.sql
);

/* Create other tables and define schemas for them here! */
CREATE TABLE room (
  id INT,
  roomname TEXT,
  username TEXT,
  messageText TEXT,
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

