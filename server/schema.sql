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



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

